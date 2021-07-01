import React from 'react';
import { useGlobalState } from '../context/GlobalState';

function Todos() {
	const { state } = useGlobalState();
	return (
		<ul>
			{state.todos.length === 0 && <li> Yoo! Nothing to do 🔥🔥</li>}
			{state.todos.length > 0 &&
				state.todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
		</ul>
	);
}

export default Todos;
