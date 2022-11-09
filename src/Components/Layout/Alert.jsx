//Hooks imports
import { useContext } from 'react';
//Contexts imports
import AlertContext from '../../Context/Alert/AlertContext';
//Npm dependencies imports
import { ImWarning } from 'react-icons/im';

// Alert Component
const Alert = () => {
	//Alert contexts data
	const { alert } = useContext(AlertContext);

	return (
		alert !== null && (
			<div className='flex items-start mb-4 space-x-2'>
				{alert.type === 'error' && (
					<>
						<ImWarning className='text-center leading-7 mt-1' size={18} />
						<p className='flex-1 font-semibold leading-7 text-slate-900 text-xs lg:text-xl'>
							{alert.message}
						</p>
					</>
				)}
			</div>
		)
	);
};

export default Alert;
