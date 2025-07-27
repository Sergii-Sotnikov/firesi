import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import css from "./ModalSideBar.module.css";

interface ModalSideBarProps {
  closeSideBar: () => void;
  children: React.ReactNode;
}

export default function ModalSideBar({ closeSideBar, children }: ModalSideBarProps) {
  const [isVisible, setIsVisible] = useState(false); // керує класом .show
  const [isClosing, setIsClosing] = useState(false); // щоб запустити зникнення

  useEffect(() => {
    // Додати .show через мікротік, щоб анімація спрацювала
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsClosing(true);
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        closeSideBar();
      }, 600); // відповідно до CSS transition
      return () => clearTimeout(timer);
    }
  }, [isClosing, closeSideBar]);

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={`${css.ModalSideBar} ${isVisible ? css.show : ""}`}>
        {children}
      </div>
    </div>,
    document.getElementById("modalSideBar-root") as HTMLDivElement
  );
}
