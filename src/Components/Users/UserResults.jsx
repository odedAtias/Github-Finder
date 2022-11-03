//Hooks imports
import axios from 'axios';
import { useEffect, useState } from 'react';

function UserResults() {
	// UserResults states
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	//Fetch function
	const fetchData = async () => {
		const url = `${process.env.REACT_APP_GITHUB_URL}/users`;
		const response = await axios.get(url, {
			headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
		});
		const data = response.data;
		setUsers(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
			{users.map(user => (
				<h3>{user.login}</h3>
			))}
		</div>
	);
}

export default UserResults;
