import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };

  const handleTodo = (toDo) => {
    return setList(list.filter((tarefa) => tarefa !== toDo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo}></Form>
        <TodoList list={list} handleTodo={handleTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
