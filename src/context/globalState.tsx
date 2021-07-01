import React, { useContext, useReducer } from 'react';

type state = {
	todos: todos[];
	inputValue: string;
};
type action = {
	type: string;
	payload: any;
};
type todos = {
	id: 'string';
	name: 'string';
};
const initialState: state = {
	todos: [],
	inputValue: '',
};
const reducer = (state: typeof initialState, action: action) => {
	switch (action.type) {
		case 'changeValue':
			return {
				...state,
				inputValue: action.payload,
			};
		case 'clearValue':
			return {
				...state,
				inputValue: '',
			};
		case 'newTodo':
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
	}
	return state;
};

const GlobalState = React.createContext<{
	state: state;
	dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const useGlobalState = () => useContext(GlobalState);

interface StateProviderProps {
	children: React.ReactNode;
}

export const StateProvider = ({
	children,
}: StateProviderProps): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalState.Provider value={{ state, dispatch }}>
			{children}
		</GlobalState.Provider>
	);
};
