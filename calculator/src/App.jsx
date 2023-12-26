import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./assets/components/Display";
import ButtonsContainer from "./assets/components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [data, setData] = useState("");
  let handleClick = (buttonName) => {
    if (buttonName === "C") {
      setData("");
    } else if (buttonName === "=") {
      setData(eval(data));
    } else {
      setData(data + buttonName);
    }
    console.log(buttonName);
  };

  return (
    <div className={styles.calculator}>
      <Display data={data} />
      <ButtonsContainer handleClick={handleClick} />
    </div>
  );
}

export default App;
