import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import Todo from './Todo';

function Todos() {
	const { state } = useGlobalState();
	return (
		<ul className='w-6/12'>
			{state.todos.length === 0 && (
				<li className='text-center'> Yoo! Nothing to do 🔥🔥</li>
			)}
			{state.todos.length > 0 &&
				state.todos.map((todo) => (
					<Todo
						key={todo.id}
						todoName={todo.name}
						position={todo.position}
					/>
				))}
		</ul>
	);
}

export default Todos;
