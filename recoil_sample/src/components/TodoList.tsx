import { useRecoilState } from "recoil";
import { todosState } from "../store";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const toggleTodo = (id: string) =>
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );

  const removeTodo = (id: string) => setTodos(todos.filter(x => x.id !== id));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Done" : ""}</td>
              <td>
                <button onClick={_ => toggleTodo(todo.id!)}>Toggle</button>
                &nbsp;
                <button onClick={_ => removeTodo(todo.id!)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
