import { atom, selector } from "recoil";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

export interface Login {
  id?: string;
  email: string;
  name: string;
}

export const todosState = atom({
  key: "todos",
  default: [] as Todo[],
});

export const loginState = atom({
  key: "login",
  default: { id: "", email: "", name: "" } as Login,
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    total: get(todosState).length,
    completed: get(todosState).filter(todo => todo.completed).length,
    notCompleted: get(todosState).filter(todo => !todo.completed).length,
    loginNotCompleted: (() => {
      const notCompleted = get(todosState).filter(
        todo => !todo.completed
      ).length;
      const name = get(loginState).name;
      return `Remaining Items for ${name}: ${notCompleted}`;
    })(),
  }),
});
