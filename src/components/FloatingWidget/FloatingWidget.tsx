import css from "./FloatingWidget.module.css";
import { IoIosCall } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Callback from "../CallBack/CallBack";
import MessengerLinks from "../MessengerLinks/MessengerLinks";

interface FloatingWidgetProps {
  openModal: (content: React.ReactNode) => void;
  openSideBar: (content: React.ReactNode) => void;
  closeSideBar: () => void;
  closeModal: () => void;
  isSideBarOpen: boolean;
}

export default function FloatingWidget({
  isSideBarOpen,
  closeSideBar,
  closeModal,
  openModal,
  openSideBar,
}: FloatingWidgetProps) {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.floatingWrapper}>
      <button
        className={css.call}
        onClick={() =>
          openModal(
            <>
                <p className={css.titleCallback}>Хочете, зателефонуємо Вам</p>
                <Callback closeModal={closeModal}/>
            </>
          )
        }
      >
        <IoIosCall size={30} className={isShaking ? css.shake : ""} />
      </button>
      <button
        className={css.messenger}
        onClick={() => {
          if (isSideBarOpen) {
            closeSideBar();
          } else {
            openSideBar(<MessengerLinks />);
          }
        }}
      >
        {isSideBarOpen ? (
          <IoIosCloseCircle size={30} />
        ) : (
          <TbMessageCircleFilled size={30} />
        )}
      </button>
    </div>
  );
}
