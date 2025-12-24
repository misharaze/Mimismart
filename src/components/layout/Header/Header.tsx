import { useState, useEffect } from 'react'
import { Burger } from '../../Burger'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Блокируем скролл страницы
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="relative z-40 w-full border-b backdrop-blur-[2px]"
        style={{ background: '#F4F4F4F2' }}
      >
        <div className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-4 md:px-[120px]">

          {/* LOGO */}
          <div className="flex items-center w-[120px] h-[32px] text-[22px] font-bold select-none">
            <span className="text-[#5BB0FF]">MiMi</span>
            <span className="text-[#111111]">Smart</span>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-[32px]">
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
                className="text-[13px] text-[#111111] hover:text-[#5BB0FF] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CONTACT BUTTON DESKTOP */}
          <div className="hidden md:flex">
            <button
              className="
                flex items-center gap-[8px]
                w-[114px] h-[36px]
                px-[16px] pt-[12px] pb-[10px]
                rounded-[50px]
                bg-white
                text-[13px]
                font-medium
                text-[#121212]
              "
              style={{
                border: '1px solid #ECECEC',
                boxShadow: 'inset 0px 2px 4px rgba(0,0,0,0.06)',
              }}
            >
              {/* ЧЁРНАЯ ТРУБКА */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#121212"
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
          </div>

          {/* BURGER MOBILE */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
            aria-label="Открыть меню"
          >
            <Burger />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-white md:hidden">
          {/* HEADER */}
          <div className="flex h-[64px] items-center justify-between px-4 border-b">
            <span className="text-[16px] font-semibold">Меню</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-[22px]"
            >
              ✕
            </button>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-6 p-6 text-[18px]">
            {[
              'Главная',
              'Услуги',
              'Функционал',
              'Оборудование',
              'Фурнитура',
              'Готовые решения',
              'Проекты',
              'Контакты',
            ].map(link => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[#111111]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
