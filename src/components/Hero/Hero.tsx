import css from "./Hero.module.css"


export default function Hero(){
    return (
        <section className={css.hero}>
  <div className={`${css.container} ${css["container-hero"]}`}>
    <h1 className={css["title-hero"]}>іноваційна технологія</h1>
    <p className={css["title-text-hero"]}>прорив у світі пожежогасіння</p>
    <h2 className={css["title-second-hero"]}>в 7 разів потужніший</h2>
    <div className={css["information-hero"]}>
      <div className={css["description-hero"]}>
        <p className={css["description-hero-logo"]}></p>
        <p className={css["description-hero-text"]}>
          Зупиніть будь яку пожежу за лічені секунди.
        </p>
        <p className={css["description-text"]}>
          FIRESI - це ваша миттєва реакція на небезпеку. Гасить будь-яку пожежу-
          від палаючого телефону до олії на сковорідці, не залишаючи бруду.
          Збережіть свій дім. Захистіть найдорожчих. Створено в Європі.
        </p>
        <button className={css["description-hero-btn"]} type="button">
          ВИБРАТИ вогнегасник FRSE
          <svg className={css["description-hero-btn-icon"]} width={20} height={20}>
            <use href={}></use>
          </svg>
        </button>
      </div>
      <img src={} alt="Fire extinguishers group"/>
      <span className={css["description-hero-addtext"]}><svg className={css["description-hero-addtext-point"]} width={} height={}>
        <use href={}></use>
      </svg> Сертифіковано в Україні</span>
    </div>
  </div>
</section>
    );
}