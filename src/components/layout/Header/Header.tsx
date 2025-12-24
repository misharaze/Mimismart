import { Burger } from "../../Burger"

export const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-[120px]">

        {/* LOGO */}
        <div
  className="
    flex items-center
    w-[120px] h-[32px]
    font-['Inter']
    text-[22px]
    font-bold
    leading-[1]
    tracking-[0.25px]
    select-none
  "
>
  <span className="text-[#5BB0FF]">MiMi</span>
  <span className="text-[#111111]">Smart</span>
</div>

        {/* NAV */}
        <nav className="flex items-center gap-[32px]">
  {[
    'Главная',
    'Услуги',
    'Функционал',
    'Оборудование',
    'Фурнитура',
    'Готовые решения',
    'Проекты',
  ].map(link => (
    <a
      key={link}
      href="#"
      className="
        font-['Helvetica']
        text-[13px]
        font-normal
        leading-[1]
        tracking-normal
        text-[#111111]
        hover:text-[#5BB0FF]
        transition-colors
      "
    >
      {link}
    </a>
  ))}
</nav>


        <Burger />

        {/* RIGHT */}
        <div className="flex items-center gap-4">
        <button
  className="
    flex items-center gap-[8px]
    w-[114px] h-[36px]
    px-[16px] pt-[12px] pb-[10px]
    rounded-[50px]
    border border-[#121212]
    bg-transparent
    font-['Helvetica_Neue','Helvetica','Arial']
    text-[13px]
    font-medium
    leading-[1]
    tracking-normal
    text-[#121212]
    hover:bg-[#121212]/[0.04]
    transition-colors
  "
>
  {/* ИКОНКА ТРУБКИ */}
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#121212"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79 19.79 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      12.84 12.84 0 0 0 .7 2.81
      2 2 0 0 1-.45 2.11L8.09 9.91
      a16 16 0 0 0 6 6
      l1.27-1.27
      a2 2 0 0 1 2.11-.45
      12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z"
    />
  </svg>

  Контакты
</button>


          {/* BURGER */}
          <button className="md:hidden flex flex-col gap-[4px]">
            <span className="h-[2px] w-[18px] bg-black" />
            <span className="h-[2px] w-[18px] bg-black" />
            <span className="h-[2px] w-[18px] bg-black" />
          </button>
        </div>
      </div>
    </header>
  )
}

