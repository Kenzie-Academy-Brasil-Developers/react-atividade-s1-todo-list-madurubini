function TodoList({ list, handleTodo }) {
  return (
    <ul>
      {list.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <button onClick={() => handleTodo(tarefa)}>Concluída</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
