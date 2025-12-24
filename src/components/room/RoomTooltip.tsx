type Props = {
  x: number
  y: number
  text: string
}

export const RoomTooltip = ({ x, y, text }: Props) => {
  return (
    <div
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -100%)',
        willChange: 'transform, opacity',
      }}
      className="
        absolute
        z-50
        pointer-events-none

        hidden md:block
        animate-tooltip
      "
    >
      <div
        className="
          relative
          max-w-[260px]
          rounded-[16px]
          bg-white
          px-4
          py-3

          text-[13px]
          leading-[18px]
          text-[#121212]

          shadow-[0_8px_24px_rgba(0,0,0,0.12)]
        "
      >
        {text}

        {/* ===== ХВОСТИК ===== */}
        <div
          className="
            absolute
            left-1/2
            bottom-[-6px]
            w-3
            h-3
            bg-white
            rotate-45
            shadow-[2px_2px_6px_rgba(0,0,0,0.08)]
          "
          style={{ transform: 'translateX(-50%) rotate(45deg)' }}
        />
      </div>
    </div>
  )
}
