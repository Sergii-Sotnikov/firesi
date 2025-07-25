import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Advantages from "../Advantages/Advantages";
import Video from "../Video/Video";
import Solution from "../Solution/Solution";
import Arguments from "../Arguments/Arguments";
import Fire from "../Fire/Fire";
import Choice from "../Сhoice/Сhoice";
import Feedbacks from "../Feedbacks/Feedbacks";
import FloatingWidget from "../FloatingWidget/FloatingWidget";
import Modal from "../Modal/Modal";
import { useState } from "react";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setIsOpenModal(true);
    setModalContent(content);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalContent(null);
  };

  return (
    <div className={css.app}>
      <main className={css.main}>
        <Header />
        <Hero />
        <Fire />
        <Advantages />
        <Video />
        <Solution />
        <Arguments />
        <Choice />
        <Feedbacks />
        <Faq/>
        <Contact/>
        <Footer/>
        <FloatingWidget openModal={openModal} />
        {isOpenModal && <Modal closeModal={closeModal}>{modalContent}</Modal>}
      </main>
    </div>
  );
}
