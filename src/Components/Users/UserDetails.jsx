//  Npm dependencies imports
import PropType from 'prop-types';

//  UserDetails component
const UserDetails = ({
	name,
	type,
	hireable,
	html_url,
	location,
	blog,
	twitter_username,
	bio,
}) => {
	return (
		<div className='col-span-2'>
			<div className='xl:mb-10'>
				<h1 className='text-3xl card-title'>
					{name}
					<div className='ml-2 mr-1 badge badge-success'>{type}</div>
					{hireable && <div className='mx-1 badge badge-info'>Hireable</div>}
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
			{/* User optional details */}
			{location && blog && twitter_username && (
				<div className='w-full rounded-lg shadow-xl bg-slate-200 stats mt-10'>
					{/* Optional details - location */}
					<div className='stat'>
						<div className='stat-title text-xs xl:text-sm'>Location</div>
						<div className='text-sm xl:text-lg stat-value'>{location}</div>
					</div>

					{/* Optional details - blog */}
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

					{/* Optional details - twitter username */}
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
				</div>
			)}
		</div>
	);
};

//  PropTypes
UserDetails.PropType = {
	name: PropType.string.isRequired,
	type: PropType.string.isRequired,
	hireable: PropType.string.isRequired,
	html_url: PropType.string.isRequired,
	location: PropType.string.isRequired,
	blog: PropType.string.isRequired,
	twitter_username: PropType.string.isRequired,
	bio: PropType.string.isRequired,
};

export default UserDetails;
