import { useState } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = (event) => {
    // console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddButtonClick}>
        <div className={`${styles.pgRow} row`}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter To-do Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDateChange} value={dueDate} />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className={`${styles.pgButton} btn btn-success`}
            >
              <BiMessageAdd></BiMessageAdd>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
