import { useState } from "react";
import { useTodoStore } from "../store/zustand/todoStore";
import TodoItem from "../components/TodoItem";

const Home = () => {
	const [input, setInput] = useState("");
	const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

	const handleAdd = () => {
		if (input.trim() === "") return;
		addTodo(input);
		setInput("");
	};
	return (
		<div className="mt-20">
			<h1 className="text-3xl font-bold">✔️ ToDoList</h1>
			<div className="mt-10 max-w-xl w-full mx-auto px-4 flex gap-3">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="할 일을 적어주세요"
					className="flex-grow px-3 py-2 outline-none rounded-md border border-[#dbdbdb]"
				/>
				<button
					onClick={handleAdd}
					className="bg-[#3f3f3f] text-white px-3 py-2 rounded-md whitespace-nowrap"
				>
					추가
				</button>
			</div>

			<ul className="mt-10">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggle={() => toggleTodo(todo.id)}
						onRemove={() => removeTodo(todo.id)}
					/>
				))}
			</ul>
		</div>
	);
};
export default Home;
