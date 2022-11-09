// Hooks imports
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
// Contexts imports
import GithubContext from '../Context/Github/GithubContext';

const User = () => {
	const { getUser, user } = useContext(GithubContext);
	const params = useParams();

	useEffect(() => {
		getUser(params.login);
	}, []);

	return <div>{user.login}</div>;
};

export default User;
