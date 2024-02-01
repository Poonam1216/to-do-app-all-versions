import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";
import styles from "./welcomeMessage.module.css";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>
  );
};

export default WelcomeMessage;
