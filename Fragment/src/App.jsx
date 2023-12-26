import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./assets/components/FoodItem";
import ErrorMessage from "./assets/components/ErrorMessage";
import Container from "./assets/components/Container";
import "./App.css";
import FoodInput from "./assets/components/FoodInput";
import { useState } from "react";
// import styles from "./assets/components/Items.module.css";

function App() {
  // let foodItems = ["Juice", "Bread", "Salad", "Banana", "Orange"];
  let [foodItems, setFoodItems] = useState([
    "Juice",
    "Bread",
    "Salad",
    "Banana",
    "Orange",
  ]);

  let handleEvent = (event) => {
    if (event.key === "Enter") {
      // let temp = event.target.value;
      setFoodItems([...foodItems, event.target.value]);
    }
  };
  return (
    <>
      <Container>
        <h1 className="app-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleEvent={handleEvent}></FoodInput>
        <FoodItem items={foodItems}></FoodItem>
      </Container>
      <Container>
        <p className="text-center">
          You must need to eat the healty food items in order to make your
          muscle strong.
        </p>
      </Container>
    </>
  );
}
export default App;
