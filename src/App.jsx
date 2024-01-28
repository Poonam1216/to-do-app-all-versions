import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/welcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueDate,
      },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);

    setTodoItems(newTodoItems);
    console.log(`Item Delete: ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
