import css from "./Solution.module.css";

export default function Solution() {
  return (
    <section className={css.solution}>
      <div className={css.container}>
        <p className={css.title}>Гасить aбсалютно ВСЕ!</p>
        <p className={css.addtitle}>
          багато загроз одне рішення вогнегасник FIRESI
        </p>
        <p className={css.text}>
          Бензин, розчинники, олії, жир, пропан, метан, природний газ,
          електронне обладнання, електропроводка, ноутбуки, смартфони,
          електросамокати та інші пристрої з літій-іонними батареями. Один
          вогнегасник для всіх загроз, без роздумів. Цей універсальний засіб
          пожежогасіння усуває необхідність мати кілька типів вогнегасників,
          спрощуючи процес вибору та застосування в критичних ситуаціях. Він
          забезпечує миттєву реакцію на будь-яку пожежну загрозу, дозволяючи
          діяти швидко та рішуче.
        </p>
        <ul className={css.list}>
            <li className={css.item}><img src="" alt="" /></li>
            <li className={css.item}><img src="" alt="" /></li>
            <li className={css.item}><img src="" alt="" /></li>
            <li className={css.item}><img src="" alt="" /></li>
            <li className={css.item}><img src="" alt="" /></li>
            <li className={css.item}><img src="" alt="" /></li>
        </ul>
      </div>
    </section>
  );
}
