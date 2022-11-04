//Hooks imports
import { createContext, useState } from 'react';
//Npm dependencies imports
import axios from 'axios';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	//Context state
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	//Context functions
	const fetchData = async () => {
		const url = `${process.env.REACT_APP_GITHUB_URL}/users`;
		const response = await axios.get(
			`${url}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const data = response.data;
		setUsers(data);
		setLoading(false);
	};

	return (
		<GithubContext.Provider value={{ users, loading, fetchData }}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
