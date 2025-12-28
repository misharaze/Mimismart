import { useState, useEffect } from 'react';
import { Burger } from '../../Burger';
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from './MobileMenu'

export const Header = ({ mode }: { mode: 'day' | 'night' }) => {
  const [menuOpen, setMenuOpen] = useState(false)



const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 1024
  )

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return isMobile
}
const isMobile = useIsMobile()


  return (
    <>
      {/* HEADER */}
      <header
        className="relative z-50 w-full border-b"
        style={{ background: mode === 'night' ? '#0B0D10' : '#F4F4F4F2' }}
      >
        <div className="mx-auto max-w-[1440px] h-[64px] px-4 md:px-[120px] flex items-center justify-between">
         
          {/* LOGO */}
          <div className="text-[22px] font-bold">
            <span className="text-[#5BB0FF]">MiMi</span>
            <span className={mode === 'night' ? 'text-white' : 'text-[#111]'}>
              Smart
            </span>
          </div>

          {/* NAV (desktop only) */}
          <nav className="hidden lg:flex gap-[32px]">
            {['Главная','Услуги','Функционал','Оборудование','Фурнитура','Готовые решения','Проекты']
              .map(item => (
                <a
                  key={item}
                  className={`text-[13px] ${
                    mode === 'night' ? 'text-white' : 'text-[#111]'
                  } hover:text-[#00D0FF]`}
                >
                  {item}
                </a>
              ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-[12px]">

{/* МАЛЕНЬКАЯ КНОПКА — ТОЛЬКО MOBILE */}
{mode === 'night' && (
  <button
    className="
      lg:hidden
      w-[36px] h-[36px]
      rounded-full
      flex items-center justify-center
      bg-[#00C2FF]
    "
    aria-label="Контакт"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.86 19.86 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6-6
      19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3
      a2 2 0 0 1 2 1.72
      12.84 12.84 0 0 0 .7 2.81
      2 2 0 0 1-.45 2.11L8.09 9.91
      a16 16 0 0 0 6 6l1.27-1.27
      a2 2 0 0 1 2.11-.45
      12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z"
      />
    </svg>
  </button>
)}

{/* БОЛЬШАЯ КНОПКА — ТОЛЬКО DESKTOP */}
<button
  className="hidden lg:flex w-[114px] h-[36px] rounded-[50px] items-center justify-center text-[13px]"
  style={{
    background: mode === 'night' ? '#00D0FF' : '#fff',
    color: mode === 'night' ? '#fff' : '#121212',
    border: mode === 'night' ? 'none' : '1px solid #ECECEC',
  }}
>
  Контакты
</button>



 {/* БУРГЕР / КРЕСТ */}
{!isMobile ? (
  // ✅ MOBILE
  menuOpen ? (
    // ❌ КРЕСТ (только когда mobile-меню открыто)
    <button
      onClick={() => setMenuOpen(false)}
      className="
        fixed top-[16px] right-[16px]
        z-[2000]
        w-[32px] h-[32px]
        flex items-center justify-center
      "
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
  ) : (
    // ☰ БУРГЕР (когда mobile-меню закрыто)
    <Burger onClick={() => setMenuOpen(true)} />
  )
) : (
  // ✅ DESKTOP — бургер всегда виден
  <Burger onClick={() => setMenuOpen(v => !v)} />
)}


  
</div>
        </div>
      </header>

      {/* === DESKTOP MENU === */}
      {menuOpen && (
        <div className="hidden lg:block">
          <DesktopMenu  />
        </div>
      )}

      {/* === MOBILE MENU === */}
      {menuOpen && (
        <div className="block lg:hidden">
         {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        </div>
      )}
    </>
  )
}