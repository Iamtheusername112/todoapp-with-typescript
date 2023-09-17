import "../components/styles.css";
import { Todo } from "../models/models";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return <li key={todo.id}> {todo.todo} </li>;
      })}
    </div>
  );
};

export default TodoList;
