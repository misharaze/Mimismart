import { useEffect, useRef, useState } from 'react'

type Room = {
  id: string
  name: string
  path: string
  lightCenter: { x: number; y: number }
  tooltip: {
    x: number
    y: number
    text: string
  }
}

const rooms: Room[] = [
  {
    id: 'bedroom',
    name: 'Спальня',
    path: `
      M 80 520
      L 520 520
      L 520 740
      L 80 740
      Z
    `,
    lightCenter: { x: 300, y: 630 },
    tooltip: {
      x: 520,
      y: 580,
      text: 'Шторы ночью закрываются',
    },
  },
  {
    id: 'garage',
    name: 'Гараж',
    path: `
      M 900 200
      L 1200 200
      L 1200 600
      L 900 600
      Z
    `,
    lightCenter: { x: 1050, y: 380 },
    tooltip: {
      x: 1200,
      y: 320,
      text: 'Камера реагирует на движение',
    },
  },
]


type Props = {
  mode: 'day' | 'night'
  onHover: (room: {
    id: string
    name: string
    tooltip: Room['tooltip']
  } | null) => void
  onSelect: (room: { id: string; name: string }) => void
}

export const ApartmentSVG = ({ mode, onHover, onSelect }: Props) => {
  const isNight = mode === 'night'

  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(null)
  const [blink, setBlink] = useState(0)
  const blinkRef = useRef(0)

  const lastMouse = useRef<{ x: number; y: number; t: number } | null>(null)

  /* ===== АНИМАЦИЯ МОРГАНИЯ ===== */
  useEffect(() => {
    let raf: number

    const loop = () => {
      blinkRef.current += 0.03 + blink * 0.2
      raf = requestAnimationFrame(loop)
    }

    loop()
    return () => cancelAnimationFrame(raf)
  }, [blink])

  /* ===== СКОРОСТЬ МЫШИ ===== */
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isNight) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const now = performance.now()

    if (lastMouse.current) {
      const dx = x - lastMouse.current.x
      const dy = y - lastMouse.current.y
      const dt = now - lastMouse.current.t || 1

      const speed = Math.sqrt(dx * dx + dy * dy) / dt
      setBlink(Math.min(speed * 18, 1))
    }

    lastMouse.current = { x, y, t: now }
  }

  return (
    <svg
      viewBox="0 0 1440 820"
      className="w-full h-full"
      onMouseMove={handleMouseMove}
    >
      {/* ===== ФОН ===== */}
      <image href="/apartment-plan.png" width="1440" height="820" />

      {mode === 'night' && (
  <rect
    width="1440"
    height="820"
    fill="rgba(0,0,0,0.82)"
    style={{
      transition: 'opacity 0.8s ease',
      pointerEvents: 'none',
    }}
  />
)}


      <defs>
        {/* ===== СВЕТ ===== */}
        <radialGradient id="light-gradient">
          <stop offset="0%" stopColor="rgba(255,255,220,0.95)" />
          <stop offset="60%" stopColor="rgba(255,255,220,0.45)" />
          <stop offset="100%" stopColor="rgba(255,255,220,0)" />
        </radialGradient>

        {/* ===== BLUR НОЧИ ===== */}
        <filter id="night-blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        {/* ===== BLUR ВОЗДУХА ===== */}
        <filter id="air-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>

        {/* ===== MASK ШТОР ===== */}
        <mask id="curtain-mask">
          <rect width="100%" height="100%" fill="white" />
          <rect
            x="80"
            y="520"
            width="440"
            height="220"
            fill="black"
            style={{
              transformOrigin: 'center',
              transform:
                hoveredRoomId === 'bedroom' ? 'scaleY(1)' : 'scaleY(0)',
              transition: 'transform 0.8s ease',
            }}
          />
        </mask>
      </defs>

      {/* ===== НОЧЬ ===== */}
      {isNight && (
        <g filter="url(#night-blur)">
          <rect
            width="1440"
            height="820"
            fill="rgba(0,0,0,0.45)"
            mask="url(#curtain-mask)"
          />
        </g>
      )}

{/* ===== 📷 КАМЕРА НАБЛЮДЕНИЯ ===== */}
{isNight && (
  <g
    style={{
      transformOrigin: '1050px 260px',
      transform:
        hoveredRoomId === 'garage'
          ? 'translate(-6px, 4px) rotate(-6deg)'
          : 'translate(0, 0) rotate(0deg)',
      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none',
    }}
  >
    {/* ЛИНЗА */}
    <circle cx="1050" cy="260" r="10" fill="#5BB0FF" opacity="0.9" />

    {/* КОРПУС */}
    <rect
      x="1040"
      y="260"
      width="20"
      height="12"
      rx="4"
      fill="#E6F2FF"
    />
  </g>
)}



      {/* ===== СВЕТ ===== */}
      {isNight &&
        rooms.map(room => (
          <circle
            key={room.id}
            cx={room.lightCenter.x}
            cy={room.lightCenter.y}
            r="200"
            fill="url(#light-gradient)"
            style={{
              opacity:
                hoveredRoomId === room.id
                  ? 0.6 +
                    Math.sin(blinkRef.current) * blink
                  : 0,
              transition: 'opacity 0.15s linear',
              pointerEvents: 'none',
            }}
          />
        ))}

      {/* ===== 🌬️ ВОЗДУХ КОНДИЦИОНЕРА ===== */}
      {isNight && hoveredRoomId === 'bedroom' && (
        <g filter="url(#air-blur)">
          {[0, 1, 2].map(i => (
            <path
              key={i}
              d="M 520 360 C 560 350, 600 370, 640 360"
              fill="none"
              stroke="rgba(180,220,255,0.6)"
              strokeWidth="2"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                from={`${i * -30} 0`}
                to="80 0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>
      )}

      {/* ===== ПУНКТИР ===== */}
      {rooms.map(room => (
        <path
          key={room.id + '-outline'}
          d={room.path}
          fill="none"
          stroke="#5BB0FF"
          strokeWidth="2"
          strokeDasharray="6 4"
          style={{
            opacity: hoveredRoomId === room.id ? 1 : 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ===== ИНТЕРАКТИВ ===== */}
      {rooms.map(room => (
        <path
          key={room.id + '-hit'}
          d={room.path}
          fill="transparent"
          cursor="pointer"
          onMouseEnter={() => {
            if (!isNight) return
            setHoveredRoomId(room.id)
            onHover({
              id: room.id,
              name: room.name,
              tooltip: room.tooltip,
            })
          }}
          onMouseLeave={() => {
            setHoveredRoomId(null)
            onHover(null)
          }}
          onClick={() => onSelect({ id: room.id, name: room.name })}
        />
      ))}
    </svg>
  )
}
