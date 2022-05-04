import { useState, useEffect } from "react";
import CloseButton from "./CloseButton";

export default function Modal({ children, onClose, className }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  function handleClose() {
    if (onClose) onClose();
    setShow(false);
  }
  return (
    <>
      {show && (
        <div className={`${className} relative z-10 h-full w-full`}>
          <CloseButton
            onClick={handleClose}
            ariaLabel="Close Modal"
            className="slide-down fixed top-0 right-0 duration-200 z-20"
          />
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white fade-in sm:flex justify-center items-center  overflow-auto">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
