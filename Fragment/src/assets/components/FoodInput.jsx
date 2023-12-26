import styles from "./FoodInput.module.css";

const FoodInput = ({ handleEvent }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Enter Food Input"
      onKeyDown={handleEvent}
    />
  );
};

export default FoodInput;
