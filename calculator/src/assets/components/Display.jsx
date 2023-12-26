import styles from "./Display.module.css";

const Display = ({ data }) => {
  return (
    <input
      type="text"
      name=""
      value={data}
      readOnly
      className={styles.display}
    />
  );
};
export default Display;
