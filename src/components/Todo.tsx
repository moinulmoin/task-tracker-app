import { CheckCircleIcon, PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';
import { useGlobalState } from '../context/GlobalState';

function Todo({ todoName, id }: { todoName: string; id: string }) {
	const { fetchAllTodos } = useGlobalState();

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
	return (
		<li className='flex justify-between gap-10 dark:bg-white dark:text-gray-900 bg-gray-900 text-white font-semibold py-4 px-4 rounded'>
			<p>{todoName}</p>
			<div className='flex gap-5'>
				<PencilAltIcon
					role='button'
					className='text-blue-500 w-6 h-6'
				/>
				<CheckCircleIcon
					role='button'
					className='text-green-500 w-6 h-6'
					onClick={() => handleCompleteTodo(id)}
				/>
			</div>
		</li>
	);
}

export default Todo;
