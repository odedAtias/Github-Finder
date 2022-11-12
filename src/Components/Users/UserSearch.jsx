// Hooks imports
import { useState, useContext } from 'react';
// npm dependencies imports
import { FiSearch } from 'react-icons/fi';
import Joi from 'joi-browser';
// Contexts imports
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/Alert/AlertContext';
// Action functions imports
import { searchUsers } from '../../Context/Github/GithubActions';
// Component imports
import ClearButton from '../Layout/Assets/ClearButton';

// UserSearch Component
const UserSearch = () => {
	// UserSearch state
	const [text, setText] = useState('');
	// UserSearch contexts data
	const { users, dispatch } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);

	//Joi Validation Schema
	const schema = Joi.object({
		text: Joi.string().trim().required().label('Username'),
	});

	//UserSearch handlers
	const handleChange = ({ target: input }) => {
		setText(input.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		//Validation
		const { error } = Joi.validate({ text: text }, schema);
		if (error) setAlert(error.details[0].message, 'error');
		else {
			// Loading
			dispatch({ type: 'LOAD_USERS' });
			//Search users
			const users = await searchUsers(text);
			dispatch({ type: 'GET_USERS', payload: users });
			setText('');
		}
	};

	const handleClear = () => {
		dispatch({ type: 'CLEAR_USERS' });
	};

	return (
		<div className='grid grid-cols-2 grid-flow-col xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div className='col-span-2'>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								onChange={handleChange}
								type='text'
								className='w-full bg-gray-300 input placeholder-current focus:outline-none rounded-xl'
								placeholder='search'
								value={text}
							/>
							<button
								type='submit'
								className='absolute top-0 right-0 w-20 pr-0 rounded-l-none btn bg-gray-300 border-none rounded-xl hover:bg-gray-300'>
								<FiSearch className='text-neutral' size={16} />
							</button>
						</div>
					</div>
				</form>
			</div>
			{/* Clear Button */}
			{users.length > 0 && <ClearButton onClear={handleClear} />}
		</div>
	);
};

export default UserSearch;
