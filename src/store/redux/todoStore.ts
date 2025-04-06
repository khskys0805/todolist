import { Todo, ToDoState } from "../../types/todo";

const initialState: ToDoState = {
	todos: [],
};

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (text: string) => ({
	type: ADD_TODO,
	payload: { text },
});

export const toggleTodo = (id: number) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const removeTodo = (id: number) => ({
	type: REMOVE_TODO,
	payload: { id },
});

// 리듀서
const toDoReducer = (state = initialState, action: any): ToDoState => {
	switch (action.type) {
		case ADD_TODO:
			const newToDo: Todo = {
				id: Date.now(),
				text: action.payload.text,
				done: false,
			};
			return { ...state, todos: [...state.todos, newToDo] };
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, done: !todo.done }
						: todo
				),
			};
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter(
					(todo) => todo.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export default toDoReducer;
