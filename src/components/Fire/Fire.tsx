import css from "./Fire.module.css";

export default function Fire() {
  return (
    <section className={css.fire}>
      <div className={css["container-fire"]}>
        <picture>
          <source
            srcSet="/img/webp/big-fire.webp 1x, /img/webp/big-fire@2x.webp 2x"
            type="image/webp"
          />
          <img
            src="/img/webp/big-fire.webp"
            alt="Big Fire"
            width={1440}
            height={202}
          />
        </picture>
      </div>
    </section>
  );
}
