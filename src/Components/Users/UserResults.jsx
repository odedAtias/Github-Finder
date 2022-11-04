//Hooks imports
import { useEffect, useState } from 'react';
//Npm dependencies imports
import axios from 'axios';
//Components imports
import Spinner from '../Layout/Assets/Spinner';

function UserResults() {
	// UserResults states
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	//Fetch function
	const fetchData = async () => {
		const url = `${process.env.REACT_APP_GITHUB_URL}/users`;
		const response = await axios.get(
			`${url}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const data = response.data;
		setUsers(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (!loading)
		return (
			<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 place-content-center'>
				{users.map(user => (
					<h3 key={user.id}>{user.login}</h3>
				))}
			</div>
		);
	else return <Spinner />;
}

export default UserResults;
