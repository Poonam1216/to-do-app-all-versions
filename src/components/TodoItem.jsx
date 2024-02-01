import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "04/10/2023";

  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className={`${styles.pgRow} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.pgButton} btn btn-danger`}
            onClick={() => {
              deleteItem(todoName);
            }}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
