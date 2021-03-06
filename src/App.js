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
      <div className="Container">
        <h2>To Do's list</h2>
        <p> Utilize o box abaixo para adicionar suas tarefas!</p>

        <Form addTodo={addTodo}></Form>
        <TodoList list={list} handleTodo={handleTodo}></TodoList>
      </div>
    </div>
  );
}

export default App;
