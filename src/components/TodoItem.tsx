import { Todo } from "../types/todo";

interface Props {
	todo: Todo;
	onToggle: () => void;
	onRemove: () => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: Props) => {
	return (
		<li>
			<span onClick={onToggle}>{todo.text}</span>
			<button onClick={onRemove}>삭제</button>
		</li>
	);
};
export default TodoItem;
