export default function ModalControls({ goTo, currItem, prevItem, nextItem }) {
  return (
    <>
      {nextItem && (
        <button
          onClick={() => goTo(nextItem)}
          type="button"
          aria-label="Next Item"
          className="slide-up fixed w-1/4 right-0 bottom-0 duration-200 text-xl text-slate-700 hover:text-slate-900 text-right m-3 flex items-center justify-end"
        >
          <span>
            Next
            <br />
            <span className="title-font">{nextItem?.title}</span>
          </span>
          <span className="ml-3 text-6xl font-thin leading-loose">{"}"}</span>
        </button>
      )}
      {prevItem && (
        <button
          onClick={() => goTo(prevItem)}
          type="button"
          aria-label="Next Item"
          className="slide-up fixed w-1/4 left-0 bottom-0 duration-200 text-xl text-slate-700 hover:text-slate-900 text-left m-3 flex items-center"
        >
          <span className="mr-3 text-6xl font-thin leading-loose">{"{"}</span>
          <span>
            Previous
            <br />
            <span className="title-font">{prevItem?.title}</span>
          </span>
        </button>
      )}
      <button
        type="button"
        onClick={() => goTo(currItem)}
        aria-label={`Close ${currItem?.title}`}
        className="slide-down fixed top-0 right-0 duration-200 w-16 h-16 text-4xl text-slate-700 hover:text-slate-900 hover:scale-125 z-20"
      >
        &times;
      </button>
    </>
  );
}
