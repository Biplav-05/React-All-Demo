import { useState } from "react";

function AddTodo({ addData }) {
  let [todoName, setTodoName] = useState();
  let [dueDate, setDueDate] = useState();

  let handleTextChange = (event) => {
    setTodoName(event.target.value);
  };
  let handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  let handleClick = () => {
    addData(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo"
            value={todoName}
            onChange={handleTextChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
