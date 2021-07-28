import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { infoValue, loginState } from "../store";
import { v4 } from "uuid";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useRecoilState(loginState);

  if (login.email) {
    return <div>Logout</div>;
  }

  return (
    <>
      Title:
      <input
        type="text"
        value={name}
        placeholder="Name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        placeholder="Email..."
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <button
        onClick={_ => {
          setLogin({ id: v4(), name, email });
          setName("");
          setEmail("");
        }}
      >
        Create Login
      </button>
    </>
  );
};

export default Login;
