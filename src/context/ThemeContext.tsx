import React, { useContext, useEffect } from 'react';

interface StateProviderProps {
	children: React.ReactNode;
}

const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const storedPrefs = window.localStorage.getItem('color-theme');
		if (typeof storedPrefs === 'string') {
			return storedPrefs;
		}

		const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
		if (userMedia.matches) {
			return 'dark';
		}
	}

	return 'light'; // light theme as the default;
};

export const ThemeContext = React.createContext<null | any>(null);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: StateProviderProps) => {
	const [theme, setTheme] = React.useState(getInitialTheme);

	const toggleTheme = () => {
		const root = window.document.documentElement;

		theme === 'dark'
			? root.classList.add(theme)
			: root.classList.remove('dark');

		localStorage.setItem('color-theme', theme);
	};

	useEffect(() => {
		toggleTheme();
	});

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
