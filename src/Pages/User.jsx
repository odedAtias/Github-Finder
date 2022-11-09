// Hooks imports
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
// Npm dependencies
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//Components imports
import Spinner from '../Components/Layout/Assets/Spinner';
// Contexts imports
import GithubContext from '../Context/Github/GithubContext';

const User = () => {
	const { getUser, user, loading } = useContext(GithubContext);
	const params = useParams();

	useEffect(() => {
		getUser(params.login);
	}, []);

	// User data
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

	//Loading case
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
						className='btn btn-outline rounded-xl hover:bg-gray-300 hover:text-neutral border-none'>
						Back To Search
					</Link>
				</div>

				<div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
					<div className='custom-card-image shadow-xl mb-6 md:mb-0'>
						<div className='card opacity-80 rounded-xl image-full'>
							{/* User Image */}
							<figure>
								<img src={avatar_url} alt='avatar' />
							</figure>
							<div className='card-body justify-end'>
								<h2 className='card-title mb-0'>{name}</h2>
								<h6>{login}</h6>
							</div>
						</div>
					</div>

					<div className='col-span-2'>
						<div className='mb-6'>
							<h1 className='text-3xl card-title'>
								{name}
								<div className='ml-2 mr-1 badge badge-success'>{type}</div>
								{hireable && (
									<div className='mx-1 badge badge-info'>Hireable</div>
								)}
							</h1>
							<p className='mt-2'>{bio}</p>
							<div className='mt-2 card-actions'>
								<a
									href={html_url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-primary rounded-xl'>
									Visit Github profile
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default User;
