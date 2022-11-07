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
	const searchUsers = async text => {
		setLoading();
		const params = new URLSearchParams({
			q: text,
			client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
			client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
		});
		const url = `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}}`;
		const response = await axios.get(`${url}`);
		const { items } = response.data;
		dispatch({ type: 'GET_USERS', payload: items });
	};

	//Set Loading
	const setLoading = () => {
		dispatch({ type: 'LOAD_USERS' });
	};

	const clearUsers = () => {
		dispatch({ type: 'CLEAR_USERS' });
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				searchUsers,
				clearUsers,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
