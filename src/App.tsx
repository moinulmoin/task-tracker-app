import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
	return (
		<ThemeProvider>
			<ThemeToggle />
			<div className='h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-white'>
				<div className='container flex flex-col items-center justify-center gap-10 py-3 mx-auto'>
					<h1 className='text-5xl font-semibold'>Task Tracker</h1>
					<AddTask />
					<TaskList />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
