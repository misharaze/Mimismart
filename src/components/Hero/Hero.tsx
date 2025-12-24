import { useState } from 'react'
import { ApartmentSVG } from '../apartment/ApartmentSVG'
import { RoomPanel } from '../room/RoolmPanel'
import { HeroContent } from './HeroContent'
import { RoomTooltip } from '../room/RoomTooltip'

type HoveredRoom = {
  id: string
  name: string
  tooltip: {
    x: number
    y: number
    text: string
  }
}

export const Hero = () => {
  const [mode, setMode] = useState<'day' | 'night'>('day')
  const [activeRoom, setActiveRoom] = useState<{ id: string; name: string } | null>(null)
  const [hoveredRoom, setHoveredRoom] = useState<HoveredRoom | null>(null)

  return (
    <section
      className="
        relative
        w-full
        bg-[#F4F4F4]

        min-h-[100svh]
        md:h-[820px]

        overflow-hidden
      "
    >
      {/* ===== SVG СЛОЙ ===== */}
      <div className="absolute inset-0 z-0">
        <ApartmentSVG
          mode={mode}
          onHover={setHoveredRoom}
          onSelect={setActiveRoom}
        />
      </div>

      {/* ===== ТЕКСТ ===== */}
      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          max-w-[1440px]

          flex
          items-center

          px-4
          md:px-[120px]

          pointer-events-none
        "
      >
        <div className="pointer-events-auto w-full md:w-auto">
          <HeroContent
            mode={mode}
            onToggle={() => setMode(m => (m === 'day' ? 'night' : 'day'))}
          />
        </div>
      </div>

      {/* ===== TOOLTIP (ТОЛЬКО DESKTOP) ===== */}
      {hoveredRoom && (
        <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
          <RoomTooltip
            x={hoveredRoom.tooltip.x}
            y={hoveredRoom.tooltip.y}
            text={hoveredRoom.tooltip.text}
          />
        </div>
      )}

      {/* ===== ПАНЕЛЬ КОМНАТЫ ===== */}
      {activeRoom && (
        <RoomPanel
          room={activeRoom}
          onClose={() => setActiveRoom(null)}
        />
      )}
    </section>
  )
}
