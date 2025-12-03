export default function Button({ colorBack, colorFront, text }) {
  return (
    <div className="relative inline-block group">
      <div
        className={`absolute inset-0 translate-y-1 ${colorBack} rounded-2xl 
                    transition-all ease-in-out duration-200 cursor-pointer 
                    group-hover:scale-[0.98] group-hover:translate-y-0.5`}
        aria-hidden="true"
      />
      <button
        className={`relative z-10 px-5 py-2 text-sm xl:text-[16px] text-white rounded-2xl ${colorFront} 
                    transition-all ease-in-out duration-200 cursor-pointer 
                    group-hover:scale-[0.98] group-hover:translate-y-0.5`}
        aria-label="Get Your Quote"
      >
        {text}
      </button>
    </div>
  );
}
