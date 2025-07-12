import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Fire from "../Fire/Fire";
import Advantages from "../Advantages/Advantages";
import Video from "../Video/Video";
import Solution from "../Solution/Solution";

export default function App() {
  return (
    <div className={css.app}>
      <main className={css.main}>
        <Header />
        <Hero/>
        <Fire/>
        <Advantages/>
        <Video/>
        <Solution/>
      </main>
    </div>
  );
}
