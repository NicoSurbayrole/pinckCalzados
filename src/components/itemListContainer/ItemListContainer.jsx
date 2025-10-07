import styles from "./itemListContainer.module.css";

const ItemListContainer = ({greeting}) => {
    return (
        <div className={styles.itemListContainer} >
            <h1>{greeting}</h1>
        </div>
    )
};



export default ItemListContainer;