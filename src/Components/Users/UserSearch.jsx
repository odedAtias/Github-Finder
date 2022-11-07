import { FiSearch } from 'react-icons/fi';
import { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import Joi from 'joi-browser';

const UserSearch = () => {
	const [text, setText] = useState('');
	const { users, searchUsers, clearUsers } = useContext(GithubContext);

	//Joi Validation Schema
	const schema = Joi.object({
		text: Joi.string().trim().required().label('Username'),
	});

	//UserSearch handlers
	const handleChange = ({ target: input }) => {
		setText(input.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		//Validation
		const { error } = Joi.validate({ text: text }, schema);
		if (error) alert(error.details[0].message);
		else {
			//Search users
			searchUsers(text);
			setText('');
		}
	};

	const handleClear = () => {
		clearUsers();
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

			{users.length > 0 && (
				<div>
					<button
						onClick={handleClear}
						className='btn btn-active rounded-xl hover:bg-gray-300 hover:text-neutral border-none w-full'>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
