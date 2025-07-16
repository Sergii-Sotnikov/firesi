import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal({closeModal, children}: ModalProps) {
     useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [closeModal]);

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={closeModal} aria-label="Close modal">
            <MdClose size={24} color="#ffffff"/>
        </button>
        {/* Тут рендериться переданий вміст із пропса children */}
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
}
