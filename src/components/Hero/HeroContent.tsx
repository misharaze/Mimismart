import { GlowButton } from "../ui/GlowButton"

type Props = {
  mode: 'day' | 'night'
  onToggle: () => void
}

export const HeroContent = ({ mode, onToggle }: Props) => {
  const isNight = mode === 'night'

  return (
    <div
      className="
        pointer-events-auto

        md:absolute
        md:left-[264px]
        md:top-[170px]
        md:w-[698px]

        w-full
        max-md:px-4
        max-md:pt-6
      "
    >
      {/* ===== ПЕРЕКЛЮЧАТЕЛЬ ===== */}
      <button
  onClick={onToggle}
  className="
    mb-6
    flex
    items-center
    gap-3
    select-none
    max-md:justify-center
  "
>
<div
    className="
      relative
      rounded-full
      bg-white
      p-[0px]
    "
    style={{
      boxShadow: '0px 6px 16px rgba(0,0,0,0.14)',
      border: '1px solid rgba(255,255,255,0.9)',
    }}
  >





  {/* ===== TRACK (relative) ===== */}
  <div
    className="relative w-[60px] h-[30px] rounded-full transition-colors duration-300"
    style={{
      background: isNight ? '#121212' : '#D8D8D8', // ⬅ инверсия как в макете
      border: '0.5px solid',
      borderImageSlice: 1,
      borderImageSource:
        'linear-gradient(180deg, #C6C6C6 0%, #FFFFFF 100%)',
      boxShadow: '0px 3px 8px rgba(0,0,0,0.24)',
    }}
  >
    {/* ===== THUMB (absolute INSIDE track) ===== */}
    <div
      className="absolute transition-transform duration-300"
      style={{
        width: '28.33px',
        height: '28.33px',
        top: '0.83px',
        left: '0.83px',
        transform: isNight
        ? 'translateX(0)'          
        : 'translateX(30.58px)',  
      }}
    >
      {/* ГРАДИЕНТНАЯ РАМКА */}
      <div
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
        <div
          style={{
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
   
            {/* 🟢 ЗЕЛЁНАЯ ТОЧКА */}
            <div
            style={{
              position: 'absolute',
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#1EB02F',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      </div>
    </div>
  
</div>


  {/* ===== TEXT ===== */}
  <span
    className="text-[14px] leading-[20px] tracking-[-0.2px]"
    style={{
      background: 'linear-gradient(90deg, #DBDBDB 0%, #262626 100%)',
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'textShimmer 3s ease-in-out infinite',
    }}
  >
    Увидеть в действии
  </span>
</button>

<div className="flex items-center gap-3">
  
      {/* ===== ЗАГОЛОВОК ===== */}
      <h1
        className="
          text-[64px]
          max-md:text-[36px]

          font-bold
          leading-[77px]
          max-md:leading-[44px]

          tracking-[-0.5px]
          transition-colors

          max-md:whitespace-normal
        "
        style={{
          color: isNight ? '#FFFFFF' : '#121212',
        }}
      >
        Умный дом под ключ
      </h1>
 <span className="glow-dot" />

</div>


      {/* ===== ОПИСАНИЕ ===== */}
      <p
        className="
          mt-4
          text-[17px]
          leading-[22px]
          tracking-[-0.2px]
          transition-colors

          max-md:max-w-full
          md:w-[452px]
        "
        style={{
          color: isNight ? '#D1D5DB' : '#0B0D10',
        }}
      >
        Производство и монтаж современной электрики.
        Автоматическое управление всеми системами дома.
      </p>

  

      <div className="mt-[80px] max-md:mt-8 max-md:flex max-md:justify-center">



        <GlowButton className="w-[249px] h-[40px]">
            <div className="glow-move" />
          Узнать больше
        </GlowButton>
      </div>
    </div>
 
  )
}
