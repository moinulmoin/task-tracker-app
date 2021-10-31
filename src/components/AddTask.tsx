import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import { useGlobalState } from '../context/GlobalState';

type inputRef = {
	current: null | any;
};

function AddTask() {
	const inputRef: inputRef = useRef(null);

	const { fetchAllTodos } = useGlobalState();

	const handleAddTodo = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const newTodo = {
			id: nanoid(),
			title: inputRef.current.value,
		};

		try {
			const res = await fetch('http://localhost:5000/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTodo),
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
		<form className='w-6/12 flex gap-4'>
			<input
				type='text'
				ref={inputRef}
				className='text-gray-800 w-10/12 rounded'
			/>
			<button
				type='submit'
				className='w-2/12 py-[10px] bg-blue-500 text-white rounded'
				onClick={handleAddTodo}
			>
				Add Task
			</button>
		</form>
	);
}

export default AddTask;
