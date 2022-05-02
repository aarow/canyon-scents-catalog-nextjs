export default function CloseButton({ onClick, ariaLabel, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || "Close"}
      className={`duration-200 w-16 h-16 text-4xl text-slate-700 hover:text-slate-900 hover:scale-125 ${className}`}
    >
      &times;
    </button>
  );
}
