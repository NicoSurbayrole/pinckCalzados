import logo from "../../assets/img/pinkcalzados-logo.svg";
import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="logo de pinck calzados" width="300px"/>
        </div>
        <div className="nav-items-container">
          <ul>
            <a className="nav-links" href=""><li>Nosotros</li></a>
            <a className="nav-links" href=""><li>Contacto</li></a>
            <a className="nav-links" href=""><li>Productos</li></a>
            <a className="nav-links" href=""><li>Categorias</li></a>
          </ul>
        </div>
        <div className="carrito-compras-container">
          <CartWidget/>
        </div>
      </header>
    </>
  );
};

export default NavBar;
