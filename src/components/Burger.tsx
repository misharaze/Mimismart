type Props = {
    onClick?: () => void
  }
  
  export const Burger = ({ onClick }: Props) => {
    return (
      <button
        onClick={onClick}
        className="
          flex h-[36px] w-[36px]
          flex-col items-center justify-center
          gap-[4px]
          rounded-full
          border border-gray-200
          transition
          hover:bg-gray-100
          md:hidden
        "
      >
        <span className="h-[2px] w-[16px] bg-gray-800 rounded" />
        <span className="h-[2px] w-[16px] bg-gray-800 rounded" />
        <span className="h-[2px] w-[16px] bg-gray-800 rounded" />
      </button>
    )
  }
  