import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

function AddTodo() {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const { addNewItem } = useContext(TodoItemsContext);
  // const todoNameElement = useRef();
  // const dueDateElement = useRef(0);
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    // event.preventDefault();

    // const todoName = todoNameElement.current.value;
    // const dueDate = dueDateElement.current.value;
    // todoNameElement.current.value = "";
    // dueDateElement.current.value = "";
    // console.log(`${todoName} due on ${dueDate}`);

    addNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      {/* <form action="" onSubmit={handleAddButtonClick}> */}
      <div className={`${styles.pgRow} row`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To-do Here"
            value={todoName}
            onChange={handleNameChange}
            // ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.pgButton} btn btn-success`}
            onClick={handleAddButtonClick}
          >
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}

export default AddTodo;
