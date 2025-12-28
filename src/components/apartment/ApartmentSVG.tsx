import {  useState } from 'react'

type Room = {
  id: string
  name: string
  path: string
  lightCenter: { x: number; y: number }
  tooltip: {
    x: number
    y: number
    text: string
  }
}

const rooms: Room[] = [
  {
    id: 'bedroom',
    name: 'Спальня',
    path: `M 80 520 L 520 520 L 520 740 L 80 740 Z`,
    lightCenter: { x: 300, y: 630 },
    tooltip: { x: 520, y: 580, text: 'Шторы ночью закрываются' },
  },
  {
    id: 'garage',
    name: 'Гараж',
    path: `M 900 200 L 1200 200 L 1200 600 L 900 600 Z`,
    lightCenter: { x: 1050, y: 370 },
    tooltip: { x: 1200, y: 320, text: 'Камера реагирует на движение' },
  },
]

type Props = {
  mode: 'day' | 'night'
  onHover: (room: { id: string; name: string; tooltip: Room['tooltip'] } | null) => void
  onSelect: (room: { id: string; name: string }) => void
}

export const ApartmentSVG = ({ mode, onHover, onSelect }: Props) => {
  const isNight = mode === 'night'
  const isTouch =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  const [, setActiveRoom] = useState<string | null>(null)

  return (
    <div
      className="relative w-full h-auto max-h-[100svh]"
      style={{ backgroundColor: isNight ? '#0B0D10' : 'white' }}
    >



      <svg
        viewBox="0 0 1440 820"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >


        <image
          href={isNight ? '/apartmentnight.png' : '/apartmentday.png'}
          width="1440"
          height="820"
        />


  {isNight && (
    <>
      <circle
        cx="1289"
        cy="440"
        r="4"
        className="car-light"
      />
      <circle
        cx="1382"
        cy="440"
        r="4"
        className="car-light delay"
      />
    </>
  )}


  <>
  
    <g>
    

      <circle cx="207" cy="538" r="6" fill="none" stroke="rgba(223, 210, 217, 0.85)">
        <animate
          attributeName="r"
          from="6"
          to="26"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.8"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </g>


    <g>
 

      <circle cx="207" cy="538" r="6" fill="none" stroke="rgba(223, 210, 217, 0.85)">
        <animate
          attributeName="r"
          from="6"
          to="26"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.8"
          to="0"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    <g>
 

      <circle cx="207" cy="538" r="6" fill="none" stroke="rgba(223, 210, 217, 0.85)">
        <animate
          attributeName="r"
          from="6"
          to="26"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          from="0.8"
          to="0"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
    </g>


  </>







        {rooms.map(room => (
          <path
            key={room.id}
            d={room.path}
            fill="transparent"
            cursor="pointer"
            onMouseEnter={() => {
              if (isTouch || !isNight) return
              setActiveRoom(room.id)
              onHover({ id: room.id, name: room.name, tooltip: room.tooltip })
            }}
            onMouseLeave={() => {
              if (isTouch) return
              setActiveRoom(null)
              onHover(null)
            }}
            onClick={() => {
              if (!isNight) return
              setActiveRoom(room.id)
              onSelect({ id: room.id, name: room.name })
            }}
          />
        ))}
      </svg>


    </div>
  )
}
