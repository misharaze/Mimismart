type RoomPanelProps = {
  room: {
    id: string
    name: string
  }
  onClose: () => void
}

export const RoomPanel = ({ room, onClose }: RoomPanelProps) => {
  return (
    <>
      {/* ===== BACKDROP (MOBILE) ===== */}
      <div
        onClick={onClose}
        className="
          fixed inset-0 z-40 bg-black/40
          md:hidden
        "
      />

      <aside
        className="
          fixed z-50 bg-white shadow-2xl

          /* ===== DESKTOP ===== */
          md:top-0 md:right-0
          md:h-full md:w-[360px]
          md:animate-slide-in-right

          /* ===== MOBILE ===== */
          bottom-0 left-0
          h-[90svh] w-full
          rounded-t-2xl
          animate-slide-up
        "
      >
        {/* ===== HEADER ===== */}
        <div
          className="
            flex items-center justify-between
            p-4 border-b
          "
        >
          <h2 className="text-lg font-semibold">
            {room.name}
          </h2>

          <button
            onClick={onClose}
            className="
              text-gray-400
              hover:text-black
              text-xl
              leading-none
            "
          >
            ✕
          </button>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="p-4 space-y-4">
          <button className="w-full rounded-xl bg-blue-500 py-4 text-white">
            💡 Освещение
          </button>

          <button className="w-full rounded-xl bg-gray-100 py-4">
            🌡 Климат
          </button>

          <button className="w-full rounded-xl bg-gray-100 py-4">
            ⚙️ Сценарии
          </button>
        </div>
      </aside>
    </>
  )
}
