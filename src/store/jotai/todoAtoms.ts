import { atom } from "jotai";
import { Todo } from "../../types/todo";
import exp from "constants";

export const todosAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(null, (get, set, text: string) => {
	const newTodo: Todo = {
		id: Date.now(),
		text,
		done: false,
	};
	set(todosAtom, [...get(todosAtom), newTodo]);
});

export const toggleTodoAtom = atom(null, (get, set, id: number) => {
	set(
		todosAtom,
		get(todosAtom).map((todo) =>
			todo.id === id ? { ...todo, done: !todo.done } : todo
		)
	);
});

export const removeTodoAtom = atom(null, (get, set, id: number) => {
	set(
		todosAtom,
		get(todosAtom).filter((todo) => todo.id != id)
	);
});
