import React, { useContext, useReducer } from 'react';

type state = {
	todos: todo[];
	position: number;
};
type action = {
	type: string;
	payload: any;
};
type todo = {
	id: string;
	name: string;
	position: number;
};
const initialState: state = {
	todos: [],
	position: 0,
};
const reducer = (state: typeof initialState, action: action) => {
	switch (action.type) {
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
