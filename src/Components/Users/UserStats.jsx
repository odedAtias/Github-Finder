//	Npm dependencies
import {FaUsers, FaUserFriends, FaCodepen, FaStore} from 'react-icons/fa';



const UserStats = ({followers, following, public_repos, public_gists}) => {
	return (
		<div className='w-full mb-8 rounded-lg shadow-md bg-slate-200 stats'>
			{/* Followers */}
			<div className='stat'>
				<div className='stat-figure text-purple-900'>
					<FaUsers className='text-3xl md:text-5xl' />
				</div>
				<div className='stat-title pr-5'>Followers</div>
				<div className='stat-value pr-5 text-2xl md:text-3xl'>{followers}</div>
			</div>
			{/* Following */}
			<div className='stat'>
				<div className='stat-figure text-purple-900'>
					<FaUserFriends className='text-3xl md:text-5xl' />
				</div>
				<div className='stat-title pr-5'>Following</div>
				<div className='stat-value pr-5 text-2xl md:text-3xl'>{following}</div>
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
	);
};

export default UserStats;
