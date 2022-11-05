//Hooks imports
import { useEffect, useContext } from 'react';
//Components imports
import Spinner from '../Layout/Assets/Spinner';
import UserItem from './UserItem';
//Contexts imports
import GithubContext from '../../Context/Github/GithubContext';

function UserResults() {
	//Destruct from the context
	const { users, loading, fetchData } = useContext(GithubContext);

	useEffect(() => {
		fetchData();
	}, []);

	if (!loading)
		return (
			<div className='grid grid-cols-1 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	else return <Spinner />;
}

export default UserResults;
