//Hooks imports
import { createContext, useReducer } from 'react';
//Npm dependencies imports
import axios from 'axios';
//Reducers imports
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	//Gloabl state
	const initialState = {
		users: [],
		user: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);
	const url = `${process.env.REACT_APP_GITHUB_URL}`;

	// Get initial users (for testing)
	const searchUsers = async text => {
		setLoading();
		const params = new URLSearchParams({
			q: text,
			client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
			client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
		});
		const response = await axios.get(`${url}/search/users?${params}`);

		const { items } = response.data;
		dispatch({ type: 'GET_USERS', payload: items });
	};

	//Get signle user
	const getUser = async login => {
		setLoading();
		const params = new URLSearchParams({
			client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
			client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
		});
		const response = await axios.get(`${url}/users/${login}?${params}`);
		if (response.status === 404) window.location = '/notfound';
		else {
			const data = response.data;
			dispatch({ type: 'GET_USER', payload: data });
		}
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
				user: state.user,
				searchUsers,
				clearUsers,
				getUser,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
