import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "04/10/2023",
    },
    {
      name: "Go To College",
      date: "04/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />

      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
