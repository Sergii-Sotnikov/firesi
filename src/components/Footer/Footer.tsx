import css from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <section className={css.footer}>
      <div className={css.container}>
        <ul className={css.footerList}>
          <li className={css.footerItem}>
            <a className={css.footerLink} href="">
              Сертифікати
            </a>
          </li>
          <li className={css.footerItem}>
            <a className={css.footerLink} href="">
              Інструкція з використання
            </a>
          </li>
          <li className={css.footerItem}>
            <a className={css.footerLink} href="">
              Відео
            </a>
          </li>
          <li className={`${css.footerItem} ${css.socials}`}>
            <a href="..." target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={32} color="#ffffff" />
            </a>
            <a href="..." target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} color="#ffffff" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
