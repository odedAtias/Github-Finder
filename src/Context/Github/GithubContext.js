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
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);
	const url = `${process.env.REACT_APP_GITHUB_URL}`;

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

	//Get user repositories
	const getUserRepos = async login => {
		setLoading();
		const params = new URLSearchParams({
			client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
			client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
			sort: 'created',
			per_page: 10,
		});
		const response = await axios.get(`${url}/users/${login}/repos?${params}`);
		const data = response.data;
		dispatch({ type: 'GET_REPOS', payload: data });
	};

	//Set loading
	const setLoading = () => {
		dispatch({ type: 'LOAD_USERS' });
	};

	//Clear users
	const clearUsers = () => {
		dispatch({ type: 'CLEAR_USERS' });
	};

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
				clearUsers,
				getUser,
				getUserRepos,
			}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
