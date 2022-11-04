// Npm dependencies imports
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className='card shadow-md compact side bg-base-100'>
			<div className='flex-row item-center space-x-4 card-body'>
				<div className='avatar mx-auto'>
					<div className='rounded-full shadow w-20 h-20'>
						<img src={avatar_url} alt='Avatar-url' />
					</div>
				</div>
			</div>
			<div className='mx-auto text-center'>
				<h2 className='card-title'>{login}</h2>
				<Link
					className='text-base-content text-opacity-40'
					to={`/users/${login}`}>
					Visit Profile
				</Link>
			</div>
		</div>
	);
};

UserItem.PropType = {
	user: PropType.object.isRequired,
};

export default UserItem;
