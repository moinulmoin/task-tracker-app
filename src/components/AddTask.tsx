import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import { useGlobalState } from '../context/GlobalState';

type inputRef = {
	current: null | any;
};

function AddTask() {
	const inputRef: inputRef = useRef(null);
	const { dispatch } = useGlobalState();
	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newObj = { id: nanoid(), name: inputRef.current.value };
		dispatch({ type: 'newTodo', payload: newObj });
		dispatch({ type: 'clearValue' });
		inputRef.current.value = '';
	};
	return (
		<form onSubmit={submitHandler}>
			<input type="text" ref={inputRef} />
			<button type="submit">Add Task</button>
		</form>
	);
}

export default AddTask;
