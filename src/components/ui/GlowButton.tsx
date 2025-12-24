import { useState } from 'react'

type Props = {
    children: React.ReactNode
  className?: string
}

export const GlowButton = ({ children, className }: Props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      className="
        relative
        mt-6
        flex
        items-center
        justify-center
        gap-[10px]
        overflow-hidden
        rounded-full
        bg-white
        shadow
      "
      style={{
        width: 249,
        height: 40,
        opacity: 1,
      }}
    >
      {/* СВЕТОВОЙ СЛЕД */}
      <span
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(
            120px circle at ${pos.x}px ${pos.y}px,
            rgba(91,176,255,0.35),
            transparent 60%
          )`,
        }}
      />

      {/* ТЕКСТ */}
      <span className="relative z-10 text-sm font-medium text-gray-800">
        {children} →
      </span>
    </button>
  )
}
