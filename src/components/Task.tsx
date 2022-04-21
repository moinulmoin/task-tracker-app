import { CheckCircleIcon, PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';
import { useGlobalState } from '../context/GlobalState';

function Task({ todoName, id }: { todoName: string; id: string }) {
	const { fetchAllTodos, dispatch } = useGlobalState();

	const handleCompleteTodo = async (id: string) => {
		try {
			const res = await fetch(`http://localhost:5000/todos/${id}`, {
				method: 'DELETE',
			});

			if (!res.ok) {
				throw new Error('Oops! Something went wrong');
			}

			fetchAllTodos();
		} catch (error: any) {
			alert(error.message);
		}
	};

	// , {
	// 	method: 'PUT',
	// 	body: JSON.stringify({ title: todoName }),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// }

	const handleGetTodo = async (id: string) => {
		try {
			const res = await fetch(`http://localhost:5000/todos/${id}`);

			if (!res.ok) {
				throw new Error('Oops! Something went wrong');
			}

			const todo = await res.json();

			dispatch({ type: 'UPDATE_BUTTON', payload: 'Update Task' });
			dispatch({ type: 'UPDATE_CURRENT_TODO', payload: todo });

			// fetchAllTodos();
		} catch (error: any) {
			alert(error.message);
		}
	};
	return (
		<li className='flex justify-between gap-10 px-4 py-4 font-semibold text-white bg-gray-900 rounded dark:bg-white dark:text-gray-900'>
			<p>{todoName}</p>
			<div className='flex gap-5'>
				<PencilAltIcon
					role='button'
					className='w-6 h-6 text-blue-500'
					onClick={() => handleGetTodo(id)}
				/>
				<CheckCircleIcon
					role='button'
					className='w-6 h-6 text-green-500'
					onClick={() => handleCompleteTodo(id)}
				/>
			</div>
		</li>
	);
}

export default Task;
