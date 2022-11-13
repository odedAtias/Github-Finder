//  Npm dependencies imports
import PropType from 'prop-types';

// UserImage component
const UserImage = ({ avatar_url, login, name }) => {
	return (
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
	);
};

//  PropTypes
UserImage.PropType = {
	avatar_url: PropType.string.isRequired,
	name: PropType.string.isRequired,
	login: PropType.string.isRequired,
};

export default UserImage;
