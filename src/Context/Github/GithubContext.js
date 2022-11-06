//Hooks imports
import { createContext, useReducer } from 'react';
//Npm dependencies imports
import axios from 'axios';
//Reducers imports
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	//Gloabl state
	const initialState = {
		users: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Get initial users (for testing)
	const fetchData = async () => {
		setLoading();
		const url = `${process.env.REACT_APP_GITHUB_URL}/users`;
		const response = await axios.get(
			`${url}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const data = response.data;
		dispatch({ type: 'GET_USERS', payload: data });
	};

	//Set Loading
	const setLoading = () => {
		dispatch({ type: 'LOADING' });
	};

	return (
		<GithubContext.Provider
			value={{ users: state.users, loading: state.loading, fetchData }}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
