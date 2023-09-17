import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/models";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  //Handle add function
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ul>
        {todos.map((t) => {
          return <li key={t.id}>{t.todo}</li>;
        })}
      </ul>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
