import css from "./Header.module.css";
import fire from "../../../public/img/fire.png";
import fireLogo from "../../../public/img/line_logo.png";
import btnFireBg from "../../../public/img/btn_fire_background.png";

export default function Header() {
  return (
    <section className={css.header}>
      <div className={css["container-header"]}>
        <p className={css["logo-text-header"]}>
          Firesi
          <img
            className={css["header-logo-fire"]}
            src={fire}
            alt="Fire logo"
            width={44}
            height={53}
          />
          <img
            className={css["header-logo-line"]}
            style={{ backgroundImage: `url(${btnFireBg})` }}
            src={fireLogo}
            alt="Fire line logo"
            width={54}
            height={3}
          />
        </p>
        <button className={css["btn-header"]}>
          ЗАМОВИТИ
          <span className={css["span-btn-header-one"]}>Fire</span>
          <span className={css["span-btn-header-two"]}>si</span>
        </button>
      </div>
    </section>
  );
}
