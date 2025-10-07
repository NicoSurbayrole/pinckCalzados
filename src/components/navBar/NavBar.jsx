import styles from "./navBar.module.css";

import CartWidget from "../cartWidget/CartWidget";
import NavLinks from "../navLinks/NavLinks.jsx";
import Logo from "../logo/logo.jsx";

const NavBar = () => {
  return (
      <header className={styles.navBar}>
        <Logo />
        <NavLinks />
        <CartWidget />
      </header>
  );
};

export default NavBar;
