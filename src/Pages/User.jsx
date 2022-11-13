//	Hooks imports
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

//	Npm dependencies
import { Link } from 'react-router-dom';

//	Components imports
import Spinner from '../Components/Layout/Assets/Spinner';
import RepoList from '../Components/Repositories/RepoList';
import UserStats from '../Components/Users/UserStats';
import UserDetails from '../Components/Users/UserDetails';
import UserImage from '../Components/Users/UserImage';

//	Contexts imports
import GithubContext from '../Context/Github/GithubContext';

//	Action functions imports
import { getUserAndRepos } from '../Context/Github/GithubActions';

// User component
const User = () => {
	const { user, loading, repos, dispatch } = useContext(GithubContext);
	//	The way to getting route params in react-router v6
	const params = useParams();
	//	Fetching the data of the user
	useEffect(() => {
		dispatch({ type: 'LOAD_USERS' });
		const getUSerData = async () => {
			const userData = await getUserAndRepos(params.login);
			dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
		};
		getUSerData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//	User data
	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;

	//	Loading case
	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					{/* Link to our home page */}
					<Link
						to='/'
						className='font-bold text-blue-600 hover:text-blue-900 rounded-xl border-none'>
						Back To Search
					</Link>
				</div>

				<div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
					{/* User image */}
					<UserImage avatar_url={avatar_url} login={login} name={name} />
					{/* User badges */}
					<UserDetails
						name={name}
						type={type}
						hireable={hireable}
						html_url={html_url}
						location={location}
						blog={blog}
						twitter_username={twitter_username}
						bio={bio}
					/>
				</div>
				{/* User stats */}
				<UserStats
					followers={followers}
					following={following}
					public_repos={public_repos}
					public_gists={public_gists}
				/>
				{/* Profile repositories ui */}
				<RepoList repos={repos} />
			</div>
		</>
	);
};

export default User;
