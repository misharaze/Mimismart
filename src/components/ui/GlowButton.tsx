import { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export const GlowButton = ({ children, className = '' }: Props) => {
  const [x, setX] = useState(0)

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  const enableAnimation = !prefersReducedMotion && !isTouch

  useEffect(() => {
    if (!enableAnimation) {
      setX(0.7)
      return
    }

    let raf = 0
    let t = 0

    const loop = () => {
      t += 0.015
      setX((Math.sin(t) + 1) / 2)
      raf = requestAnimationFrame(loop)
    }

    loop()
    return () => cancelAnimationFrame(raf)
  }, [enableAnimation])

  return (
    <div className={`relative inline-flex ${className}`}>
      <button
        className="
          relative z-10
          w-[249px] h-[40px]
          rounded-full
          overflow-hidden
          flex items-center justify-center
          gap-[10px]
        "
        style={{
          background: '#F0F4F6',
          boxShadow:
            'inset 0 2px 4px rgba(0,0,0,0.06), 0 10px 20px rgba(0,0,0,0.15)',
        }}
      >
        {/* 🔵 СВЕТЯЩИЙСЯ ШАР ВНУТРИ */}
        <span
          className="pointer-events-none absolute top-1/2"
          style={{
            left: `${x * 70 + 10}%`,
            width: 90,
            height: 90,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(140,240,255,0.9) 0%, rgba(140,240,255,0.45) 35%, rgba(140,240,255,0.1) 60%, transparent 70%)',
            filter: 'blur(8px)',
            opacity: 0.9,
          }}
        />

        {/* ТЕКСТ */}
        <span
          className="relative z-10 flex items-center gap-2 font-semibold text-[13px] uppercase tracking-[-0.2px]"
          style={{ color: '#00576B' }}
        >
          {children}

          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <line
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              stroke="#00576B"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M18 8L22 12L18 16"
              stroke="#00576B"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
    </div>
  )
}
