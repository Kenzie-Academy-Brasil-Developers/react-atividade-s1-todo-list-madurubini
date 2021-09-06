import { useState } from "react";

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Digite sua tarefa aqui"
      />
      <button onClick={() => addTodo(userInput)}>Add Tarefa</button>
    </form>
  );
}

export default Form;
