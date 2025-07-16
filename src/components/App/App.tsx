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

export default function App() {
  return (
    <div className={css.app}>
      <main className={css.main}>
        <Header />
        <Hero />
        <Fire/>
        <Advantages />
        <Video />
        <Solution />
        <Arguments />
        <Choice/>
        <Feedbacks/>
        <FloatingWidget/>
      </main>
    </div>
  );
}
