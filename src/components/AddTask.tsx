import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import { useGlobalState } from '../context/GlobalState';

type inputRef = {
	current: null | any;
};

function AddTask() {
	const inputRef: inputRef = useRef(null);
	const { state, dispatch } = useGlobalState();
	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newObj = {
			id: nanoid(),
			name: inputRef.current.value,
			position: ++state.position,
		};
		dispatch({ type: 'newTodo', payload: newObj });
		dispatch({ type: 'clearValue' });
		inputRef.current.value = '';
	};
	return (
		<form onSubmit={submitHandler}>
			<input type="text" ref={inputRef} className="mr-2" />
			<button type="submit" className="add-btn">
				Add Task
			</button>
		</form>
	);
}

export default AddTask;
