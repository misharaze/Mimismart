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
    path: `M 80 520 L 520 520 L 520 740 L 80 740 Z`,
    lightCenter: { x: 300, y: 630 },
    tooltip: { x: 520, y: 580, text: 'Шторы ночью закрываются' },
  },
  {
    id: 'garage',
    name: 'Гараж',
    path: `M 900 200 L 1200 200 L 1200 600 L 900 600 Z`,
    lightCenter: { x: 1050, y: 380 },
    tooltip: { x: 1200, y: 320, text: 'Камера реагирует на движение' },
  },
]

type Props = {
  mode: 'day' | 'night'
  onHover: (room: { id: string; name: string; tooltip: Room['tooltip'] } | null) => void
  onSelect: (room: { id: string; name: string }) => void
}

export const ApartmentSVG = ({ mode, onHover, onSelect }: Props) => {
  const isNight = mode === 'night'
  const isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  const [activeRoomId, setActiveRoomId] = useState<string | null>(null)

  const blinkRef = useRef(0)
  const lastMouse = useRef<{ x: number; y: number; t: number } | null>(null)
  const [blink, setBlink] = useState(0)

  /* ===== МОРГАНИЕ (ТОЛЬКО DESKTOP) ===== */
  useEffect(() => {
    if (isTouch) return

    let raf: number
    const loop = () => {
      blinkRef.current += 0.03 + blink * 0.2
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(raf)
  }, [blink, isTouch])

  /* ===== СКОРОСТЬ МЫШИ (DESKTOP) ===== */
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isNight || isTouch) return

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

  const currentRoom = activeRoomId

  return (
    <svg
      viewBox="0 0 1440 820"
      className="w-full h-auto max-h-[100vh]"
      preserveAspectRatio="xMidYMid meet"
      onMouseMove={handleMouseMove}
    >
      {/* ФОН */}
      <image href="/apartment-plan.png" width="1440" height="820" />

      {/* НОЧЬ (упрощена на mobile) */}
      {isNight && (
        <rect
          width="1440"
          height="820"
          fill={isTouch ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.45)'}
          pointerEvents="none"
        />
      )}

      <defs>
        <radialGradient id="light-gradient">
          <stop offset="0%" stopColor="rgba(255,255,220,0.9)" />
          <stop offset="60%" stopColor="rgba(255,255,220,0.35)" />
          <stop offset="100%" stopColor="rgba(255,255,220,0)" />
        </radialGradient>

        <radialGradient id="garage-glow">
          <stop offset="0%" stopColor="rgba(255,210,120,0.6)" />
          <stop offset="70%" stopColor="rgba(255,190,80,0.15)" />
          <stop offset="100%" stopColor="rgba(255,190,80,0)" />
        </radialGradient>
      </defs>

      {/* 🟡 ЖЁЛТЫЙ СВЕТ ГАРАЖА */}
      {isNight && (
        <ellipse
          cx="1050"
          cy="420"
          rx="260"
          ry="230"
          fill="url(#garage-glow)"
          opacity={
            currentRoom === 'garage'
              ? isTouch
                ? 0.85
                : 0.85 + Math.sin(blinkRef.current * 0.6) * 0.1
              : 0.6
          }
          pointerEvents="none"
        />
      )}

      {/* 💡 СВЕТ КОМНАТ */}
      {isNight &&
        rooms.map(room => (
          <circle
            key={room.id}
            cx={room.lightCenter.x}
            cy={room.lightCenter.y}
            r="200"
            fill="url(#light-gradient)"
            opacity={currentRoom === room.id ? 0.7 : 0}
            pointerEvents="none"
          />
        ))}

      {/* 📷 КАМЕРА (ТОЛЬКО DESKTOP) */}
      {isNight && !isTouch && (
        <g
          style={{
            transformOrigin: '1050px 260px',
            transform:
              currentRoom === 'garage'
                ? 'translate(-6px,4px) rotate(-6deg)'
                : 'none',
            transition: 'transform 0.8s ease',
          }}
          pointerEvents="none"
        >
          <circle cx="1050" cy="260" r="10" fill="#5BB0FF" />
          <rect x="1040" y="260" width="20" height="12" rx="4" fill="#E6F2FF" />
        </g>
      )}

      {/* ПУНКТИР */}
      {rooms.map(room => (
        <path
          key={room.id}
          d={room.path}
          fill="none"
          stroke="#5BB0FF"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity={currentRoom === room.id ? 1 : 0}
          pointerEvents="none"
        />
      ))}

      {/* ИНТЕРАКТИВ */}
      {rooms.map(room => (
        <path
          key={room.id + '-hit'}
          d={room.path}
          fill="transparent"
          cursor="pointer"
          onMouseEnter={() => {
            if (isTouch || !isNight) return
            setActiveRoomId(room.id)
            onHover({ id: room.id, name: room.name, tooltip: room.tooltip })
          }}
          onMouseLeave={() => {
            if (isTouch) return
            setActiveRoomId(null)
            onHover(null)
          }}
          onClick={() => {
            if (!isNight) return
            setActiveRoomId(room.id)
            onHover({ id: room.id, name: room.name, tooltip: room.tooltip })
            onSelect({ id: room.id, name: room.name })
          }}
        />
      ))}
    </svg>
  )
}
