import { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");

	return (
		<div>
			<h1>투두 리스트</h1>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="할 일을 적어주세요"
			/>
			<button>추가</button>

			<ul></ul>
		</div>
	);
};
export default Home;
