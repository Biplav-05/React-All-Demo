import TodoItem1 from "./TodoItem1";
const TodoItems = ({ data, removeData }) => {
  return (
    <div className="item-container">
      {data.map((a) => (
        <TodoItem1
          key={a.name}
          name={a.name}
          date={a.date}
          removeData={removeData}
        ></TodoItem1>
      ))}
    </div>
  );
};
export default TodoItems;
