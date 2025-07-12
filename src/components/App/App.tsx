import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Fire from "./Fire/Fire";
import Advantages from "../Advantages/Advantages";

export default function App() {
  return (
    <div className={css.app}>
      <main className={css.main}>
        <Header />
        <Hero/>
        <Fire/>
        <Advantages/>
      </main>
    </div>
  );
}
