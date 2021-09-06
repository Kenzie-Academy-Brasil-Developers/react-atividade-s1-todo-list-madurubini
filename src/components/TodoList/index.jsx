import "./style.css";
import { FaCheckCircle } from "react-icons/fa";

function TodoList({ list, handleTodo }) {
  return (
    <ul className="Lista">
      {list.map((tarefa, index) => (
        <li className="Tarefa" key={index}>
          {tarefa}
          <button onClick={() => handleTodo(tarefa)}>
            <FaCheckCircle className="Checked" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
