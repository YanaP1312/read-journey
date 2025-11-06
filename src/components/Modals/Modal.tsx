import { useEffect } from "react";
import ModalPortal from "./ModalPortal";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalPortal>
      <div className="modalBackdrop" onClick={handleBackdropClick}>
        <div className="modalContent">
          <button className="modalClose" onClick={onClose}>
            <RxCross2 />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
