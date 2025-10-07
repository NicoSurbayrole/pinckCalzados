import styles from "./navLinks.module.css";

const NavLinks = () => {
  return (
      <nav className={styles.navItemsContainer}>
        <ul>
          <a className={styles.navLinks} href="">
            <li>Nosotros</li>
          </a>
          <a className={styles.navLinks} href="">
            <li>Contacto</li>
          </a>
          <a className={styles.navLinks} href="">
            <li>Productos</li>
          </a>
          <a className={styles.navLinks} href="">
            <li>Categorias</li>
          </a>
        </ul>
      </nav>
  );
};

export default NavLinks;
