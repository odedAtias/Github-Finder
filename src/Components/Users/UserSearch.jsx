import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const UserSearch = () => {
	const [text, setText] = useState('');

	const handleChange = ({ target: input }) => {
		setText(input.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		//Validation
	};

	return (
		<div className='grid grid-cols-2 mb-8 gap-8'>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								className='w-full bg-gray-300 input placeholder-current focus:outline-none rounded-xl'
								placeholder='search'
								value={text}
								onChange={handleChange}
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
			<div>
				<button className='btn btn-active rounded-xl hover:bg-gray-300 hover:text-neutral border-none'>
					Clear
				</button>
			</div>
		</div>
	);
};

export default UserSearch;
