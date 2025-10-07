import logo from "../../assets/img/pinkcalzados-logo.svg";
import CartWidget from "../cartWidget/CartWidget";
import styles from "./navBar.module.css";


const NavBar = () => {
  return (
    <>
      <header className={styles.navBar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo de pinck calzados" width="300px"/>
        </div>
        <div className={styles.navItemsContainer}>
          <ul>
            <a className={styles.navLinks} href=""><li>Nosotros</li></a>
            <a className={styles.navLinks} href=""><li>Contacto</li></a>
            <a className={styles.navLinks} href=""><li>Productos</li></a>
            <a className={styles.navLinks} href=""><li>Categorias</li></a>
          </ul>
        </div>
        <div className={styles.carritoComprasContainer}>
          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default NavBar;
