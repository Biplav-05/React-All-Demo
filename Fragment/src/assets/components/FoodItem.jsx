import { useState } from "react";
import Item from "./Item";
import styles from "./Item.module.css";

const FoodItem = ({ items }) => {
  let [activeItem, setActiveItem] = useState([]);
  let onBuyButton = (items) => {
    let newItems = [...activeItem, items];
    setActiveItem(newItems);
  };

  return (
    <ul className={`${styles["kg-list"]} list-group `}>
      {items.map((items) => (
        <Item
          key={items}
          tmp={items}
          bought={activeItem.includes(items)}
          handleButton={() => {
            if (confirm(`Are you sure want to buy ${items} ?`)) {
              onBuyButton(items);
            }
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItem;
