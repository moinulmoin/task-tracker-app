import React, { useContext, useReducer } from 'react';

type state = {
	todos: object[];
	loading: boolean;
};
type action = {
	type: string;
	payload: any;
};

interface StateProviderProps {
	children: React.ReactNode;
}

const initialState: state = {
	todos: [],
	loading: false,
};

const reducer = (state: typeof initialState, action: action) => {
	switch (action.type) {
		case 'TOGGLE_LOADING':
			return {
				...state,
				loading: action.payload,
			};

		case 'LOAD_TODOS':
			return {
				...state,
				todos: action.payload,
			};
	}
	return state;
};

const GlobalState = React.createContext<null | any>(null);

export const useGlobalState = () => useContext(GlobalState);

export const GlobalStateProvider = ({
	children,
}: StateProviderProps): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchAllTodos = async () => {
		const response = await fetch('http://localhost:5000/todos');
		const data = await response.json();
		dispatch({ type: 'LOAD_TODOS', payload: data });
	};

	return (
		<GlobalState.Provider value={{ state, fetchAllTodos, dispatch }}>
			{children}
		</GlobalState.Provider>
	);
};
