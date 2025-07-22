import css from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={css.contact}>
      <div className={css.container}>
        <h3 className={css.title}>КОНТАКТИ</h3>
        <div className={css.information}>
          <div className={css.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d857.8360467228931!2d24.058430912699926!3d49.8874692285935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2sfr!4v1753213617234!5m2!1sru!2sfr"
              width={575}
              height={350}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={css.contactForm}>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
  );
}
