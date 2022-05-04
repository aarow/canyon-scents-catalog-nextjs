export default function ProductModalControls({ goTo, prevItem, nextItem }) {
  return (
    <div>
      {nextItem && (
        <button
          onClick={() => goTo(nextItem)}
          type="button"
          aria-label="Next Item"
          className="order-2 slide-up sm:fixed w-5/6 sm:w-1/4 right-0 bottom-0 duration-200 sm:text-xl text-slate-700 hover:text-slate-900 text-right ml-auto sm:m-3 flex items-center justify-end overflow-hidden text-ellipsis"
        >
          <span>
            Next
            <br />
            <span className="title-font text-ellipsis overflow-hidden">
              {nextItem?.title}
            </span>
          </span>
          <span className="ml-3 text-6xl font-thin sm:leading-loose">
            {"}"}
          </span>
        </button>
      )}
      {prevItem && (
        <button
          onClick={() => goTo(prevItem)}
          type="button"
          aria-label="Next Item"
          className="order-1 slide-up sm:fixed w-5/6 sm:w-1/4 left-0 bottom-0 duration-200 sm:text-xl text-slate-700 hover:text-slate-900 text-left m-3 flex items-center overflow-hidden"
        >
          <span className="mr-3 text-6xl font-thin sm:leading-loose">
            {"{"}
          </span>
          <span>
            Previous
            <br />
            <span className="title-font text-ellipsis overflow-hidden">
              {prevItem?.title}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
