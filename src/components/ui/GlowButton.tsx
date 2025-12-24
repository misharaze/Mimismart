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

  /* ===== ДВИЖЕНИЕ ШАРА (DESKTOP) ===== */
  useEffect(() => {
    if (!enableAnimation) {
      setX(0.5)
      return
    }

    let raf: number
    let t = 0

    const animate = () => {
      t += 0.015
      setX((Math.sin(t) + 1) / 2)
      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(raf)
  }, [enableAnimation])

  return (
    <div className={`relative inline-flex ${className}`}>
      {/* ===== АУРА ===== */}
      {!isTouch && (
        <div
          className="pointer-events-none absolute inset-[-20px] rounded-full blur-[60px]"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(180,230,255,0) 0%,
                rgba(180,230,255,0.45) 40%,
                rgba(180,230,255,0.6) 50%,
                rgba(180,230,255,0.45) 60%,
                rgba(180,230,255,0) 100%
              )
            `,
          }}
        />
      )}

      {/* ===== КНОПКА ===== */}
      <button
  className="
    relative
    z-10
    w-[249px]
    h-[40px]
    rounded-full
    overflow-hidden
    flex
    items-center
    justify-center
    gap-[10px]
  "
  style={{
    background: '#F0F4F6',
    boxShadow: `
      0px 4px 6px -2px rgba(0,0,0,0.05),
      0px 10px 15px -3px rgba(0,0,0,0.10)
    `,
  }}
>
        {/* ===== ОБЁРТКА ===== */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            padding: '3px',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(200,200,200,0.6))',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* ===== СВЕТОВОЙ ШАР ===== */}
        <span
          className="pointer-events-none absolute top-1/2"
          style={{
            left: `${enableAnimation ? x * 70 + 10 : 50}%`,
            width: 60,
            height: 60,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(180,230,255,0.5), transparent 55%)',
            filter: isTouch ? 'blur(8px)' : 'blur(12px)',
            opacity: enableAnimation ? 1 : 0.6,
          }}
        />

        {/* ===== ТЕКСТ + СТРЕЛКА ===== */}
        <span
  className="
    relative
    z-10
    flex
    items-center
    gap-[8px]
    font-['Inter']
    font-semibold
    text-[14px]
    leading-[100%]
    tracking-[-0.2px]
    uppercase
  "
  style={{ color: '#00576B' }}
>
  {children}

  {/* ДЛИННАЯ СТРЕЛКА 24×24 */}
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  {/* ЛИНИЯ */}
  <line
    x1="2"
    y1="12"
    x2="22"
    y2="12"
    stroke="#00576B"
    strokeWidth="1.6"
    strokeLinecap="round"
  />

  {/* НАКОНЕЧНИК */}
  <path
    d="M18 8L22 12L18 16"
    stroke="#00576B"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</span>
      </button>
    </div>
  )
}
