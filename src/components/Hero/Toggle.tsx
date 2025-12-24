type ToggleProps = {
  value: 'day' | 'night'
  onChange: () => void
}

export const Toggle = ({ value, onChange }: ToggleProps) => {
  const isNight = value === 'night'

  return (
    <button
      onClick={onChange}
      className="
        relative
        w-[60px]
        h-[30px]
        rounded-full
        select-none

        flex
        items-center

        transition-colors
        duration-300

        focus:outline-none
      "
      style={{
        background: isNight ? '#121212' : '#D8D8D8',
        border: '0.5px solid',
        borderImageSlice: 1,
        borderImageSource:
          'linear-gradient(180deg, #C6C6C6 0%, #FFFFFF 100%)',
        boxShadow: '0px 3px 8px rgba(0,0,0,0.24)',
      }}
      aria-pressed={isNight}
    >
      {/* ===== THUMB ===== */}
      <span
        className="absolute transition-transform duration-300"
        style={{
          width: '28.33px',
          height: '28.33px',
          top: '0.83px',
          left: '0.83px',
          transform: isNight ? 'translateX(30.58px)' : 'translateX(0)',
        }}
      >
        {/* РАМКА */}
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: `
              conic-gradient(
                from 180deg at 50% 50%,
                #FFFFFF 0deg,
                #ACACAC 54deg,
                #FFFFFF 108deg,
                #ACACAC 162deg,
                #FFFFFF 216deg,
                #ACACAC 270deg,
                #ACACAC 324deg,
                #FFFFFF 360deg
              )
            `,
            padding: '0.5px',
            boxShadow: '0px 2px 6px rgba(0,0,0,0.25)',
          }}
        >
          {/* ВНУТРЕННИЙ КРУГ */}
          <span
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `
                conic-gradient(
                  from 180deg at 50% 50%,
                  #D9D9D9 0deg,
                  #A6A6A6 46.8deg,
                  #D9D9D9 90deg,
                  #808080 136.8deg,
                  #D9D9D9 180deg,
                  #767676 226.8deg,
                  #D9D9D9 270deg,
                  #747474 316.8deg,
                  #D9D9D9 360deg
                )
              `,
            }}
          />
        </span>
      </span>
    </button>
  )
}
