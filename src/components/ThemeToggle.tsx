import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
	const { theme, setTheme } = useThemeContext();

	return (
		<button className='transition duration-500 ease-in-out rounded-full p-2 absolute right-0 top-0 mr-4 mt-4 md:mr-20 w-10 h-10 bg-gray-900 dark:bg-white flex justify-center items-center'>
			{theme === 'dark' ? (
				<SunIcon
					onClick={() => setTheme('light')}
					className='w-6 h-6 text-gray-300 dark:text-gray-900 text-2xl cursor-pointer'
				/>
			) : (
				<MoonIcon
					onClick={() => setTheme('dark')}
					className='w-6 h-6 text-gray-300 dark:text-gray-300 text-2xl cursor-pointer'
				/>
			)}
		</button>
	);
};

export default ThemeToggle;
