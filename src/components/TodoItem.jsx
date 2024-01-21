function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "04/10/2023";
  return (
    <div className="container">
      <div className="row pg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger pg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
