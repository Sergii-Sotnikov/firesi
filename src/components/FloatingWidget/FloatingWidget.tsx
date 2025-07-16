import css from "./FloatingWidget.module.css"
import { IoIosCall } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

interface FloatingWidgetProps {
  openModal: (content: React.ReactNode) => void;
}

export default function FloatingWidget( { openModal }: FloatingWidgetProps){
    const [isShaking, setIsShaking] = useState(false);


      useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    return(
        <div className={css.floatingWrapper}>
            <button className={css.call} onClick={() =>
                openModal(
                    <>
                    <p>HELLO</p>
                    </>
                )
            }>
                <IoIosCall size={30} className={isShaking ? css.shake : ""} />
            </button>
            <button className={css.messenger}>
                <TbMessageCircleFilled size={30}/>
            </button>
        </div>)

      }