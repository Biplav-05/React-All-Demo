import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import EmptyMessage from "./components/EmptyMessage";

function App() {
  let data = [
    // {
    //   name: "Item 1",
    //   date: "02/11/1996",
    // },
    // {
    //   name: "Item 2",
    //   date: "12/12/2005",
    // },
    // {
    //   name: "Item 3",
    //   date: "11/01/2023",
    // },
  ];

  let [newData, setNewData] = useState(data);

  let addData = (txt, date) => {
    setNewData([...newData, { name: txt, date: date }]);
  };
  let removeData = (name, date) => {
    let temp = newData.filter(
      (data) => data.name !== name && data.date !== date
    );
    setNewData(temp);
  };
  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo addData={addData} />
      {newData.length === 0 && <EmptyMessage></EmptyMessage>}
      <TodoItems data={newData} removeData={removeData}></TodoItems>
    </center>
  );
}

export default App;
