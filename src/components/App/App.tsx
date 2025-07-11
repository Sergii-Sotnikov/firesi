import css from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

export default function App() {
  return (
    <div className={css.app}>
      <main className={css.main}>
        <Header />
        <Hero/>
      </main>
    </div>
  );
}
