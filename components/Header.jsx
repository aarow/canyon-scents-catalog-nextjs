export default function Header({ children }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center bg-white shadow">
      <span className="p-6">
        <img src="/logo-main.svg" alt="Canyon Scents" className="w-48" />
      </span>

      <div className="absolute top-8 left-12">{children}</div>
    </div>
  );
}
