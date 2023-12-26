import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ handleClick }) => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {/* Use the map function to iterate the button name and generate new button as new name occurs */}

      {buttonNames.map((btn) => (
        <button
          className={styles.button}
          key={btn}
          onClick={() => {
            handleClick(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
