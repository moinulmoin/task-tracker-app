import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
	return (
		<ThemeProvider>
			<ThemeToggle />
			<div className='h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white'>
				<div className='container py-3 mx-auto flex flex-col justify-center items-center gap-10'>
					<h1 className='text-5xl font-semibold'>Task Tracker</h1>
					<AddTask />
					<TaskList />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
