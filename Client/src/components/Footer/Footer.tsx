import style from "./Footer.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <div>
      © 2023-{new Date().getFullYear()} Matīss Oskars Zelmens. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
