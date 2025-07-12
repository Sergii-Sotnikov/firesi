import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={`${css.container} ${css["container-hero"]}`}>
        <h1 className={css["title-hero"]}>іноваційна технологія <span className={css["title-text-hero"]}>прорив у світі пожежогасіння</span></h1>
        <h2 className={css["title-second-hero"]}>в 7 разів потужніший</h2>
        <div className={css["information-hero"]}>
          <div className={css["description-hero"]}>
            <span className={css["description-hero-addtext"]}>
              <svg
                className={css["description-hero-addtext-point"]}
                width={7}
                height={7}
              >
                <use href="/icons/sprite.svg#icon-point"></use>
              </svg>
              Сертифіковано в Україні
            </span>
            <p className={css["description-hero-logo"]}>
              Fire<span className={css["description-hero-logo-span"]}>si</span>
              <img
                className={css["fire-hero-line"]}
                src="/img/hero_line.png"
                alt="Hero fire line"
              />
            </p>
            <p className={css["description-hero-text"]}>
              Зупиніть будь яку пожежу за лічені секунди.
            </p>
            <p className={css["description-text"]}>
              FIRESI - це ваша миттєва реакція на небезпеку. Гасить будь-яку
              пожежу- від палаючого телефону до олії на сковорідці, не залишаючи
              бруду. Збережіть свій дім. Захистіть найдорожчих. Створено в
              Європі.
            </p>
            <button className={css["description-hero-btn"]} type="button">
              <span className={css["description-hero-btn-text"]}>
                ВИБРАТИ вогнегасник FRSE
                <svg
                  className={css["description-hero-btn-icon"]}
                  width={20}
                  height={20}
                >
                  <use href="/icons/sprite.svg#icon-arrow-right"></use>
                </svg>
              </span>
            </button>
          </div>
          <picture>
            <source
              srcSet="/img/webp/extinguisher.webp 1x, /img/webp/extinguisher@2x.webp 2x"
              type="image/webp"
            />
            <img
              src="/img/webp/extinguisher.webp"
              alt="Fire extinguishers group"
              width={562}
              height={705}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
