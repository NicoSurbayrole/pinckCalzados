import styles from "./cartWidget.module.css";

const CartWidget = () => {
  return (

      <div className={styles.cart}>
        🛒<span>0</span>
      </div>
  );
};

export default CartWidget;
