import React from 'react';

function Todo({ todoName, position }: { todoName: string; position: number }) {
	return (
		<li className="space-between">
			<p>
				<span className="position">{position}.</span> {todoName}
			</p>
			<div className="btn-group">
				<button className="edit-btn mr-1">edit</button>
				<button className="delete-btn">done</button>
			</div>
		</li>
	);
}

export default Todo;
