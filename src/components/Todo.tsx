import { CheckCircleIcon, PencilAltIcon } from '@heroicons/react/solid';
import React from 'react';

function Todo({ todoName }: { todoName: string; position: number }) {
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
				/>
			</div>
		</li>
	);
}

export default Todo;
