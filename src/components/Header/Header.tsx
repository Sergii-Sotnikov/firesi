import css from "./Header.module.css";

export default function Header() {
  return (
    <section className={css.header}>
      <div className={css["container-header"]}>
        <p className={css["logo-text-header"]}>Firesi</p>
        <button className={css["btn-header"]}>
          ЗАМОВИТИ
          <span className={css["span-btn-header-one"]}>Fire</span>
          <span className={css["span-btn-header-two"]}>si</span>
        </button>
      </div>
    </section>
  );
}
