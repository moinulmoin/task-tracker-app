import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import TodoList from './components/TodoList';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<ThemeToggle />
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
