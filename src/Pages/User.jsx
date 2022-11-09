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
					<div className='custom-card-image shadow-xl mb-6 md:mb-0  rounded-xl'>
						<div className='card opacity-80 rounded-xl image-full h-full'>
							{/* User Image */}
							<figure>
								<img src={avatar_url} alt='avatar' />
							</figure>
							{/* User heading */}
							<div className='card-body justify-end'>
								<h2 className='card-title mb-0'>{name}</h2>
								<h6>{login}</h6>
							</div>
						</div>
					</div>

					<div className='col-span-2'>
						<div className='mb-10'>
							{/* User badges */}
							<h1 className='text-3xl card-title'>
								{name}
								<div className='ml-2 mr-1 badge badge-success'>{type}</div>
								{hireable && (
									<div className='mx-1 badge badge-info'>Hireable</div>
								)}
							</h1>
							{/* User bio */}
							<p className='mt-2'>{bio}</p>
							{/* User link to github profile */}
							<div className='mt-6 card-actions'>
								<a
									href={html_url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-primary rounded-xl'>
									Visit Github profile
								</a>
							</div>
						</div>
						<div className='w-full rounded-lg shadow-xl bg-slate-200 stats'>
							{/* Optional details - location */}
							{location && (
								<div className='stat'>
									<div className='stat-title text-xs xl:text-sm'>Location</div>
									<div className='text-sm xl:text-lg stat-value'>
										{location}
									</div>
								</div>
							)}
							{/* Optional details - blog */}
							{blog && (
								<div className='stat'>
									<div className='stat-title text-xs xl:text-sm'>Blog</div>

									<a
										href={`https:${blog}`}
										target='_blank'
										rel='noreferrer'
										className='text-sm xl:text-lg stat-value'>
										{blog}
									</a>
								</div>
							)}
							{/* Optional details - twitter username */}
							{twitter_username && (
								<div className='stat'>
									<div className='text-xs xl:text-sm stat-title'>
										{twitter_username}
									</div>
									<a
										href={`https:${twitter_username}`}
										target='_blank'
										rel='noreferrer'
										className='text-sm xl:text-lg stat-value'>
										{twitter_username}
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* User stats */}
				<div className='w-full mb-6 rounded-lg shadow-md bg-slate-200 stats'>
					{/* Followers */}
					<div className='stat'>
						<div className='stat-figure text-purple-900'>
							<FaUsers className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Followers</div>
						<div className='stat-value pr-5 text-2xl md:text-3xl'>
							{followers}
						</div>
					</div>
					{/* Following */}
					<div className='stat'>
						<div className='stat-figure text-purple-900'>
							<FaUserFriends className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Following</div>
						<div className='stat-value pr-5 text-2xl md:text-3xl'>
							{following}
						</div>
					</div>
					{/* Public repos */}
					<div className='stat'>
						<div className='stat-figure text-purple-900'>
							<FaCodepen className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Public Repos</div>
						<div className='stat-value pr-5 text-2xl md:text-3xl'>
							{public_repos}
						</div>
					</div>
					{/* Public Gists */}
					<div className='stat'>
						<div className='stat-figure text-purple-900'>
							<FaStore className='text-3xl md:text-5xl' />
						</div>
						<div className='stat-title pr-5'>Public Gists</div>
						<div className='stat-value pr-5 text-2xl md:text-3xl'>
							{public_gists}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default User;
