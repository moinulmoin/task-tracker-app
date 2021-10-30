import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import TodoList from './components/TodoList';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<div className='absolute right-0 top-0 mr-4 mt-4 md:mr-20 w-10 h-10 bg-gray-900 dark:bg-white border-2 border-solid border-blue-500 rounded-full flex justify-center items-center'>
				<ThemeToggle />
			</div>
			<div className='h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white'>
				<div className='container py-3 mx-auto flex flex-col justify-center items-center gap-10'>
					<h1 className='text-5xl font-semibold'>To Do App</h1>
					<TodoList />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
