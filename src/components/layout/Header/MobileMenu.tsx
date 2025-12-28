import { GlowButton } from '../../ui/GlowButton'

type Props = {
  onClose: () => void
}

export const MobileMenu = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-[999] bg-white flex flex-col">
      {/* HEADER */}
      <div className="relative h-[56px] flex items-center justify-end px-4 shrink-0">
        <button
          onClick={onClose}
          className="w-[32px] h-[32px] flex items-center justify-center"
          aria-label="Закрыть меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* SCROLL */}
      <div className="flex-1 overflow-y-auto px-[20px] pb-[32px]">
        {/* Контент по центру как в макете */}
        <div className="mx-auto w-full max-w-[326px]">
          {/* MENU LIST */}
          <div
            className="flex flex-col gap-[20px]"
            style={{
              fontFamily: 'Helvetica',
              fontWeight: 400,
              fontSize: 17,
              lineHeight: '20px',
              letterSpacing: '-0.2px',
            }}
          >
            {[
              'Главная',
              'Услуги',
              'Функционал',
              'Оборудование',
              'Фурнитура',
              'Готовые решения',
              'Проекты',
              'Цены',
              'О компании',
              'Партнерам',
              'Статьи',
              'Контакты',
            ].map(item => (
              <div key={item} className="text-black">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-[45px] mb-[45px]  border-t" />

        {/* CONTACTS BLOCK — как в Figma */}
{/* CONTACTS BLOCK — как в Figma */}
<div
  className="flex flex-col gap-[32px]"
  style={{
    fontFamily: 'Helvetica',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '20px',
    letterSpacing: '-0.2px',
    verticalAlign: 'middle',
  }}
>
  {/* Адрес + рейтинг ВМЕСТЕ (один div) */}
  <div className="flex items-start gap-[10px]">
    <img src="/Maps.png" className="w-[50px] h-[50px] shrink-0 mt-[1px]" />

    <div className="flex flex-col gap-[10px]">
      <span className="text-[#478BEB]">
        г. Москва, Новоданиловская наб., 6к1
      </span>

      <div className="flex items-center gap-[8px]">
        <span className="text-[#FFB800]">★</span>
        <span className="text-black">4.9 рейтинг</span>
      </div>
    </div>
  </div>

{/* Телефон + время (в одном блоке, вертикально) */}
<div className="flex items-start gap-[10px]">
  <img
    src="/tel.png"
    className="w-[50px] h-[50px] shrink-0 mt-[2px]"
  />

  <div className="flex flex-col gap-[6px]">
    <span className="text-[#478BEB]">
      +7 (4012) 234-45-56
    </span>

    <span className="text-[#ACACAC]">
      Время работы 09:00 – 18:00
    </span>
  </div>
</div>


  {/* Email */}
  <div className="flex items-center gap-[10px]">
    <img src="/courrier.png" className="w-[50px] h-[50px] shrink-0" />
    <span className="text-[#478BEB]">mimismart@gmail.com</span>
  </div>

  {/* Соцсети — ТОЛЬКО 3 иконки */}
  <div className="flex  gap-[18px] opacity-40">
    {['YTBLUE', 'TGBLUE', 'VKBLUE'].map(i => (
      <img key={i} src={`/${i}.png`} className="w-[18px] h-[18px]" />
    ))}
  </div>
</div>

            {/* Кнопка — по центру */}
            <div className="pt-[18px] mt-[41px]  flex justify-center">
              <GlowButton>Связаться с нами</GlowButton>
            </div>

            {/* Статус — по центру */}
            <div
              className="pt-[12px] flex items-center gap-[8px]"
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 400,
                fontSize: 13,
                lineHeight: '16px',
                letterSpacing: '-0.2px',
                color: '#7A7A7A',
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-green-500" />
              Мы на связи сейчас
            </div>

            {/* Платформы — по центру */}
            <div className="pt-[16px] mt-[41px] flex justify-center gap-[14px]">
              {['apple', 'android'].map(i => (
                <div
                  key={i}
                  className="w-[126px] h-[52px] flex items-center justify-center rounded-[12px]"
                  style={{ border: '1px solid rgba(224,232,235,0.4)' }}
                >
                  <img src={`/${i}.png`} className="w-[24px] h-[24px]" />
                </div>
              ))}
            </div>
          </div>

          {/* нижний запас как в макете */}
          <div className="h-[24px]" />
        </div>
      </div>

  )
}
