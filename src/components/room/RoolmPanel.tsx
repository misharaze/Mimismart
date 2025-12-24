type RoomPanelProps = {
    room: {
      id: string
      name: string
    }
    onClose: () => void
  }
  
  export const RoomPanel = ({ room, onClose }: RoomPanelProps) => {
    return (
      <aside className="
        fixed top-0 right-0
        h-full w-[360px]
        bg-white shadow-2xl
        z-50
        animate-slide-in
      ">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">{room.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-black">
            ✕
          </button>
        </div>
  
        <div className="p-4 space-y-4">
          <button className="w-full rounded-lg bg-blue-500 py-3 text-white">
            💡 Освещение
          </button>
  
          <button className="w-full rounded-lg bg-gray-100 py-3">
            🌡 Климат
          </button>
  
          <button className="w-full rounded-lg bg-gray-100 py-3">
            ⚙️ Сценарии
          </button>
        </div>
      </aside>
    )
  }
  