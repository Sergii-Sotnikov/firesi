import css from "./Advantages.module.css";

export default function Advantages() {
  return (
    <section className={css.advantages}>
      <div className={css["container-advantages"]}>
        <h2 className={css["advantages-title"]}>
          Європейські інновації для вашої безпеки
        </h2>
        <span className={css["advantages-title-text"]}>
          переваги
          <span className={css["advantages-logo-span-one"]}> Fire</span>
          <span className={css["advantages-logo-span-two"]}>si</span>
          <img
            className={css["fire-advantages-line"]}
            src="/img/hero_line.png"
            alt="Hero fire line"
          />
        </span>
      </div>
    </section>
  );
}
