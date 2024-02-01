import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef(0);

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handlePrint = () => {
  //   console.log("print");
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are :${noOfUpdates.current}`);
  // };

  const handleAddButtonClick = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on ${dueDate}`);

    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <form action="" onSubmit={handleAddButtonClick}>
        <div className={`${styles.pgRow} row`}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter To-do Here"
              // value={todoName}
              // onChange={handleNameChange}
              ref={todoNameElement}
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement} />
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
