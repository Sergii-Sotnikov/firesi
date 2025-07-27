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
import { Helmet } from "react-helmet-async";
import ModalSideBar from "../ModalSideBar/ModalSideBar";


export default function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false)
  const [sideBarContent, setSideBarContent] =useState<React.ReactNode>(null);


  const openModal = (content: React.ReactNode) => {
    setIsOpenModal(true);
    setModalContent(content);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalContent(null);
  };

  const openSideBar = (content: React.ReactNode) => {
    setIsOpenSideBar(true);
    setSideBarContent(content)
  };

  const closeSideBar = () => {
    setIsOpenSideBar(false);
    setSideBarContent(null);
  }

  return (
    <div className={css.app}>
      <Helmet>
        <title>FIRESI - інноваційне рішення для пожежогасіння</title>
        <meta
          name="description"
          content="FIRESI - зупиняє будь-яке загоряння за секунди. Без бруду, без наслідків."
        />
        <link rel="canonical" href="https://www.firesi.com.ua/" />
        <meta property="og:title" content="FIRESI - інноваційне рішення для пожежогасіння" />
        <meta property="og:description" content="FIRESI - зупиняє будь-яке загоряння за секунди. Без бруду, без наслідків." />
        <meta property="og:url" content="https://www.firesi.com.ua/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.firesi.com.ua/img/preview.jpg" />
      </Helmet>
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
        <FloatingWidget openModal={openModal} openSideBar={openSideBar} closeSideBar={closeSideBar} isSideBarOpen={isOpenSideBar}/>
        {isOpenModal && <Modal closeModal={closeModal}>{modalContent}</Modal>}
        {isOpenSideBar && <ModalSideBar closeSideBar={closeSideBar}>{sideBarContent}</ModalSideBar>}
      </main>
    </div>
  );
}
