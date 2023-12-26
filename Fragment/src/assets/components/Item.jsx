import styles from "./Item.module.css";

const Item = ({ tmp, handleButton, bought }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={`${styles["kg-span"]}`}>{tmp}</span>{" "}
      <button
        type="button"
        className={`${styles.btn} btn btn-info `}
        onClick={handleButton}
      >
        Buy Now
      </button>
    </li>
  );
};
export default Item;
