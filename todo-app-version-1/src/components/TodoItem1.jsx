function TodoItem1({ name, date, removeData }) {
  let sendData = () => {
    removeData(name, date);
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={sendData}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
