function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "04/10/2023";
  return (
    <div class="container">
      <div class="row pg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger pg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
