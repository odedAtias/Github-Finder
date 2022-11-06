import { FiSearch } from 'react-icons/fi';
import { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import Joi from 'joi-browser';

const UserSearch = () => {
	const [text, setText] = useState('');
	const { users } = useContext(GithubContext);

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
		const { error } = Joi.validate({ text }, schema);
		if (error) alert(error.details[0].message);
		else {
			//Search users
			console.log('search');
		}
	};

	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div className='col-span-1'>
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
								className='absolute top-0 right-0 rounded-l-none w-1/4 btn bg-gray-300 border-none rounded-xl hover:bg-gray-300'>
								<FiSearch className='text-neutral' size={16} />
							</button>
						</div>
					</div>
				</form>
			</div>

			{users.length > 0 && (
				<div>
					<button className='btn btn-active rounded-xl hover:bg-gray-300 hover:text-neutral border-none'>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
