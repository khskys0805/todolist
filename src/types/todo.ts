export interface Todo {
	id: number;
	text: string;
	done: boolean;
}

export interface ToDoState {
	todos: Todo[];
}
