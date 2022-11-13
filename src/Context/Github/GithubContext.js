//	Hooks imports
import { createContext, useReducer } from 'react';
//	Reducers imports
import githubReducer from './GithubReducer';

const GithubContext = createContext();

//	Github context provider
export const GithubProvider = ({ children }) => {
	//	Gloabl state
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};
	
	const [state, dispatch] = useReducer(githubReducer, initialState);

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
