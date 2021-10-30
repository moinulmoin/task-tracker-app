import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
	const { theme, setTheme } = useThemeContext();

	return (
		<div className='transition duration-500 ease-in-out rounded-full p-2'>
			{theme === 'dark' ? (
				<SunIcon
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
					className='w-6 h-6 text-gray-300 dark:text-gray-900 text-2xl cursor-pointer'
				/>
			) : (
				<MoonIcon
					onClick={() =>
						setTheme(theme === 'dark' ? 'light' : 'dark')
					}
					className='w-6 h-6 text-gray-300 dark:text-gray-300 text-2xl cursor-pointer'
				/>
			)}
		</div>
	);
};

export default ThemeToggle;
