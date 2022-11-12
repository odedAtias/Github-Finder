//Npm dependencies imports
import PropType from 'prop-types';

const ClearButton = ({ onClear }) => {
	return (
		<div>
			<button
				onClick={() => onClear()}
				className='btn btn-active rounded-xl hover:bg-gray-300 hover:text-neutral border-none w-full'>
				Clear
			</button>
		</div>
	);
};

// PropTypes
ClearButton.PropType = {
	onClear: PropType.func.isRequired,
};

export default ClearButton;
