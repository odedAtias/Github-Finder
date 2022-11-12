// npm dependencies imports
import { FiSearch } from 'react-icons/fi';

// Search Button component
const SearchButton = () => {
	return (
		<button
			type='submit'
			className='absolute top-0 right-0 w-20 pr-0 rounded-l-none btn bg-gray-300 border-none rounded-xl hover:bg-gray-300'>
			<FiSearch className='text-neutral' size={16} />
		</button>
	);
};

export default SearchButton;
