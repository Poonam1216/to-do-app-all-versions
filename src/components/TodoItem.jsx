import styles from "./TodoItem.module.css";

function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "04/10/2023";
  return (
    <div className="container">
      <div className={`${styles.pgRow} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className={`${styles.pgButton} btn btn-danger`}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
