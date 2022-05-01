export default function Modal({ children, nextItem, prevItem, onClose }) {
  const backgroundStyle = {
    backgroundImage: `url("${imageSrc}")`,
  };

  function handleClick() {
    onClose(id);
  }

  return (
    <div className="z-10 fixed  top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-300">
      <div className="md:aspect-square w-11/12 md:w-auto md:h-3/5 xl:h-4/5 mx-auto md:my-auto relative drop-shadow-xl">
        <div
          style={backgroundStyle}
          className="bg-center bg-cover border-8 aspect-square"
        ></div>

        <div className="md:w-2/3 mx-auto -mt-72 p-8 text-sm md:drop-shadow-lg border border-white border-4 relative backdrop-blur">
          <div className="bg-white opacity-80 absolute top-0 left-0 bottom-0 right-0"></div>
          <div className="relative prose lg:prose-xl">
            <h2 className="text-center">{title}</h2>
            <div>{description}</div>
            <div className="grid grid-cols-3 mt-3">
              <span />
              <div className="w-8 not-prose m-auto">
                <img src="/logo-cs.svg" alt="" />
              </div>
              <Prices maxPrice={maxPrice} minPrice={minPrice} />
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Close ${title}`}
        className="absolute top-0 right-0 duration-200 w-16 h-16 text-4xl text-slate-700 hover:text-slate-900 hover:scale-125"
      >
        &times;
      </button>
      <button
        type="button"
        aria-label={`Next ${title}`}
        className="absolute top-50 right-0 duration-200 w-16 h-16 text-4xl text-slate-700 hover:text-slate-900 hover:scale-125"
      >
        &raquo;
      </button>
    </div>
  );
}

export function Prices({ maxPrice, minPrice }) {
  return (
    <div className="font-serif italic text-right">
      {maxPrice === minPrice && <span>${maxPrice}</span>}
      {maxPrice !== minPrice && (
        <>
          <span className="line-through">${maxPrice}</span>{" "}
          <span className="text-red-700">${minPrice}</span>
        </>
      )}
    </div>
  );
}
