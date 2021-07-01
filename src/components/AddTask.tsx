import React from 'react';
import { nanoid } from 'nanoid';
import { useGlobalState } from '../context/GlobalState';

function AddTask() {
	const { state, dispatch } = useGlobalState();
	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newObj = { id: nanoid(), name: state.inputValue };
		dispatch({ type: 'newTodo', payload: newObj });
		dispatch({ type: 'clearValue' });
	};
	const changeHandler = (e: React.SyntheticEvent) => {
		dispatch({ type: 'changeValue', payload: e.target.value });
	};
	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				value={state.inputValue}
				onChange={changeHandler}
			/>
			<button type="submit">Add Task</button>
		</form>
	);
}

export default AddTask;
