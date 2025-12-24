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
    <section className="relative w-full h-[820px] overflow-hidden bg-[#F4F4F4]">

      {/* SVG */}
      <div className="absolute inset-0 z-0">
        <ApartmentSVG
          mode={mode}
          onHover={setHoveredRoom}
          onSelect={setActiveRoom}
        />
      </div>

      {/* ТЕКСТ */}
      <div className="relative z-10 mx-auto h-full max-w-[1440px] px-[120px] flex items-center pointer-events-none">
  <div className="pointer-events-auto">
    <HeroContent
      mode={mode}
      onToggle={() => setMode(m => (m === 'day' ? 'night' : 'day'))}
    />
  </div>
  </div>

      {/* TOOLTIP */}
      {hoveredRoom && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <RoomTooltip
            x={hoveredRoom.tooltip.x}
            y={hoveredRoom.tooltip.y}
            text={hoveredRoom.tooltip.text}
          />
        </div>
      )}

      {/* ПАНЕЛЬ */}
      {activeRoom && (
        <RoomPanel
          room={activeRoom}
          onClose={() => setActiveRoom(null)}
        />
      )}
    </section>
  )
}
