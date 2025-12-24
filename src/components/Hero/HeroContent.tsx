import { GlowButton } from "../ui/GlowButton"

type Props = {
  mode: 'day' | 'night'
  onToggle: () => void
}

export const HeroContent = ({ mode, onToggle }: Props) => {
  return (
    <div
      className="
        absolute
        left-[264px]
        top-[170px]
        w-[698px]
        pointer-events-auto
      "
    >
      {/* ПЕРЕКЛЮЧАТЕЛЬ */}
      <button
  onClick={onToggle}
  className="mb-6 flex items-center gap-3 select-none"
>
  {/* TRACK */}
  <div
    className={`relative w-[44px] h-[24px] rounded-full transition-colors duration-500 ${
      mode === 'night'
        ? 'bg-[#5BB0FF]'
        : 'bg-[#E5E7EB]'
    }`}
  >
    {/* THUMB */}
    <div
      className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow transition-transform duration-500 ${
        mode === 'night'
          ? 'translate-x-[20px]'
          : ''
      }`}
    />
  </div>

  <span className="text-[13px] text-[#6B7280]">
    Увидеть в действии
  </span>
</button>


      {/* ЗАГОЛОВОК */}
      <h1
        className="
          w-[698px]
    text-[64px]
    font-bold
    leading-[77px]
    tracking-[-0.5px]
    text-[#121212]
    whitespace-nowrap
        "
      >
        Умный дом под ключ
      </h1>

      {/* ОПИСАНИЕ */}
      <p
        className="
          mt-4
          w-[452px]
          text-[17px]
          leading-[22px]
          tracking-[-0.2px]
          text-[#4B5563]
        "
      >
        Производство и монтаж современной электрики.
        Автоматическое управление всеми системами дома.
      </p>

      {/* КНОПКА */}
      <div className="mt-[80px]">
        <GlowButton className="w-[249px] h-[40px]">
          Узнать больше 
        </GlowButton>
      </div>
    </div>
  )
}
