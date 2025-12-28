




export const DesktopMenu = () => {
    return (
        <div
        className="
          absolute top-[64px] left-0 right-0 z-40
          bg-white
          border-t
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        "
      >
        <div className="mx-auto max-w-[1440px] px-[120px] h-[382px] flex">
  
          {/* LEFT */}
          <div className="w-[220px] pt-[16px] flex flex-col gap-[16px]">
            <span className="text-[13px] text-[#5A6D7C]">Функционал</span>
  
            {['Безопасность','Микроклимат','Мультимедиа','Электрика','Освещение']
              .map(item => (
                <div
                  key={item}
                  className="flex items-center justify-between text-[16px] cursor-pointer hover:text-[#00D0FF]"
                >
                  <span>{item}</span>
                  <img src="/arrow.png" className="w-[24px] h-[24px]" />
                </div>
              ))}
          </div>
  
          {/* spacer */}
          <div className="flex-1" />
  
          {/* RIGHT */}
          <div className="w-[264px] pt-[16px] flex flex-col gap-[12px] text-[15px]">
            <p className="text-[#478BEB]">г. Москва, Новоданиловская наб., 6к1</p>
  
            <div className="flex items-center gap-[3px]">
              <span className="text-[#FFB800]">★</span>
              <span>4.9 рейтинг</span>
            </div>
  
            <p className="text-[#478BEB]">+7 (4012) 234-45-56</p>
            <p className="text-[#ACACAC] mt-[-15px]">Время работы 09:00 – 18:00</p>
            <p className="text-[#478BEB] mt-[24px] mb-[15px]  ">mimismart@gmail.com</p>
  
            <div className="flex gap-[16px] mb-[40px] opacity-40">
              {['yt', 'telegram', 'Wk'].map(i => (
                <img key={i} src={`/${i}.png`} className="w-[18px] h-[18px]" />
              ))}
            </div>
  
            <div className="flex gap-[12px]">
              {['apple', 'android'].map(i => (
                <div
                  key={i}
                  className="w-[126px] h-[52px] flex items-center justify-center rounded-[12px]"
                  style={{ border: ' 1px solid #E0E8EB66' }}
                >
                  <img src={`/${i}.png`} className="w-[24px] h-[24px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  