import React, { useContext } from 'react';

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

export const ThemeContext = React.createContext<{
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({ theme: getInitialTheme(), setTheme: () => {} });

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: StateProviderProps) => {
	const [theme, setTheme] = React.useState(getInitialTheme);

	const rawSetTheme = (rawTheme: string) => {
		const root = window.document.documentElement;
		const isDark = rawTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(rawTheme);

		localStorage.setItem('color-theme', rawTheme);
	};

	React.useEffect(() => {
		rawSetTheme(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
