import { useState } from "react";
import { useTodoStore } from "../store/zustand/todoStore";
import TodoItem from "../components/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux/store";
import { addTodo, removeTodo, toggleTodo } from "../store/redux/todoStore";

const Home = () => {
	const [input, setInput] = useState("");
	// const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore(); // zustand 사용
	const todos = useSelector((state: RootState) => state.todo.todos); // todo:store에 등록된 이름 (todoReducer가 저장된 위치) .todos: 그 안에 있는 실제 todo 배열열
	const dispatch = useDispatch();

	const handleAdd = () => {
		if (input.trim() === "") return;
		// addTodo(input); // zustand
		dispatch(addTodo(input)); // redux
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
						onToggle={() => dispatch(toggleTodo(todo.id))} // redux
						onRemove={() => dispatch(removeTodo(todo.id))} // redux
						// onToggle={() => toggleTodo(todo.id)} // zustand
						// onRemove={() => removeTodo(todo.id)} // zustand
					/>
				))}
			</ul>
		</div>
	);
};
export default Home;
