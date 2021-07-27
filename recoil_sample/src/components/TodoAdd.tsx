import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { infoValue, todosState } from "../store";
import { v4 } from "uuid";

const TodoAdd = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);
  const info = useRecoilValue(infoValue);

  return (
    <>
      Total Items: {info.total}
      <br />
      Finished Items: {info.completed}
      <br />
      Unfinished Items: {info.notCompleted}
      <br />
      <br />
      Title:
      <input
        type="text"
        value={title}
        placeholder="Todo title..."
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <button
        onClick={_ => {
          setTodos([...todos, { id: v4(), title: title, completed: false }]);
          setTitle("");
        }}
      >
        Add Todo
      </button>
    </>
  );
};

export default TodoAdd;
