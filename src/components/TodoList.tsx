import React from 'react';
import AddTask from './AddTask';
import Todos from './Todos';

function TodoList() {
	return (
		<>
			<AddTask />
			<Todos />
		</>
	);
}

export default TodoList;
