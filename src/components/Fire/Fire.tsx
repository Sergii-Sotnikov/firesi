import css from "./Fire.module.css";

export default function Fire() {
  return (
    <section className={css.fire}>
      <img
        className={css.fireImage}
        src="/img/webp/fire_bg.webp"
        alt="Fire background"
      />
    </section>
  );
}
