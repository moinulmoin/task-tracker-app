import React, { useEffect } from 'react';
import { useGlobalState } from '../context/GlobalState';
import Spinner from './Spinner';
import Todo from './Todo';

interface todo {
	id: string;
	title: string;
}

function Todos() {
	const { state, dispatch, fetchAllTodos } = useGlobalState();

	const { todos, loading } = state;

	const handleFetchTodos = async () => {
		await dispatch({ type: 'TOGGLE_LOADING', payload: true });
		await fetchAllTodos();
		await dispatch({ type: 'TOGGLE_LOADING', payload: false });
	};
	useEffect(() => {
		handleFetchTodos();
	}, []);

	return (
		<ul className='w-6/12 flex flex-col gap-4'>
			{loading && todos.length === 0 && <Spinner />}
			{!loading && todos.length === 0 && (
				<li className='text-center'> Yoo! Nothing to do 🔥🔥</li>
			)}
			{todos.length > 0 &&
				todos.map((todo: todo) => (
					<Todo key={todo.id} todoName={todo.title} id={todo.id} />
				))}
		</ul>
	);
}

export default Todos;
