import TodoItemsContext from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  // console.log(todoItems);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem todoDate={item.date} todoName={item.name} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
