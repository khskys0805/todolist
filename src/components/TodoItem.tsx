import { Todo } from "../types/todo";
import {
	MdOutlineCheckBox,
	MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

interface Props {
	todo: Todo;
	onToggle: () => void;
	onRemove: () => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
	return (
		<li className="mt-3 max-w-xl mx-auto px-4 flex items-center gap-3">
			<span onClick={onToggle} className="cursor-pointer">
				{todo.done ? (
					<MdOutlineCheckBox />
				) : (
					<MdOutlineCheckBoxOutlineBlank />
				)}
			</span>
			<span
				className={`flex-grow text-left ${
					todo.done ? "line-through text-gray-400" : ""
				}`}
			>
				{todo.text}
			</span>
			<button
				className="bg-[#3f3f3f] text-white px-3 py-2 rounded-md whitespace-nowrap"
				onClick={onRemove}
			>
				삭제
			</button>
		</li>
	);
};
export default TodoItem;
