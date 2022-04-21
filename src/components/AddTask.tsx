import { nanoid } from 'nanoid';
import React, { useEffect, useRef } from 'react';
import { useGlobalState } from '../context/GlobalState';

type InputProps = {
	current: any | null;
};

function AddTask() {
	const inputRef: InputProps = useRef(null);

	const { fetchAllTodos, state, dispatch } = useGlobalState();

	const { currentTask, buttonName } = state;

	const { id: taskId, title: taskTitle } = currentTask;

	useEffect(() => {
		if (buttonName === 'Update Task') {
			inputRef.current.value = taskTitle;
		}
	}, [taskTitle, buttonName]);

	const handleAddTodo = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (inputRef.current.value === '') {
			alert('Task cannot be empty');
			return;
		}

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
			inputRef.current.value = '';
		} catch (error: any) {
			alert(error.message);
		}
	};

	const handleUpdateTodo = async (e: React.SyntheticEvent) => {
		e.preventDefault();

		const updatedTodo = {
			...currentTask,
			title: inputRef.current.value,
		};

		try {
			const res = await fetch(`http://localhost:5000/todos/${taskId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedTodo),
			});

			if (!res.ok) {
				throw new Error('Oops! Something went wrong');
			}

			fetchAllTodos();
			inputRef.current.value = '';
			dispatch({ type: 'UPDATE_BUTTON', payload: 'Add Task' });
		} catch (error: any) {
			alert(error.message);
		}
	};

	return (
		<form className='flex w-6/12 gap-4'>
			<input
				type='text'
				ref={inputRef}
				className='w-10/12 px-2 font-medium text-white bg-gray-800 rounded dark:bg-white dark:text-gray-800 focus:outline-0'
			/>
			<button
				type='submit'
				className='w-2/12 py-[10px] bg-blue-500 text-white rounded'
				onClick={
					buttonName === 'Add Task' ? handleAddTodo : handleUpdateTodo
				}
			>
				{state.buttonName}
			</button>
		</form>
	);
}

export default AddTask;
