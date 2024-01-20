function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row pg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter To-do Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success pg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
