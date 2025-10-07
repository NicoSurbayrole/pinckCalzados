import styles from "./logo.module.css";
import pinckClazados from "../../assets/img/pinkcalzados-logo.svg";

const Logo = () => {
    return(
         <div className={styles.logoContainer}>
          <img src={pinckClazados} alt="logo de pinck calzados" width="300px" />
        </div>
    )
}


export default Logo;