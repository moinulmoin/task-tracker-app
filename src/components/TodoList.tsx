import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';

interface todo {
	id: string;
	name: string;
}

interface input {
	current: null | any;
}

function TodoList() {
	const [todoList, setTodolist] = useState<todo[]>([]);
	const inputRef: input = useRef();

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const newObj = { id: nanoid(), name: inputRef.current.value.trim() };
		const newTodoList = [...todoList, newObj];
		setTodolist(newTodoList);
		inputRef.current.value = '';
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				<input type="text" ref={inputRef} />
				<button type="submit">Add Task</button>
			</form>
			<ul>
				{todoList.length === 0 && <li> Yoo! Nothing to do 🔥🔥</li>}
				{todoList.length > 0 &&
					todoList.map((todo) => <li key={todo.id}>{todo.name}</li>)}
			</ul>
		</>
	);
}

export default TodoList;
