import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";
import TodoAdd from "./components/TodoAdd";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecoilRoot>
          <Login></Login>
          <TodoAdd></TodoAdd>
          <TodoList></TodoList>
        </RecoilRoot>
      </header>
    </div>
  );
}

export default App;
