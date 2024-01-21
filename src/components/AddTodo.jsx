import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container text-center">
      <div className={`${styles.pgRow} row`}>
        <div className="col-6">
          <input type="text" placeholder="Enter To-do Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.pgButton} btn btn-success`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
