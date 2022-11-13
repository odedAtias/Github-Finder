//	Npm dependencies imports
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//	NotFound component
const NotFound = () => {
	return (
		<div className='hero'>
			<div className='text-center hero-content'>
				<div className='max-w-lg'>
					<h1 className='text-8xl font-bold mb-8'>Oops</h1>
					<p className='text-4xl mb-8'>404 - Page not found</p>
					<Link
						to='/'
						className='btn btn-active rounded-xl btn-xs sm:btn-sm md:btn-md lg:btn-lg'>
						<FaHome className='mr-4' />
						Back to Home
						<FaHome className='ml-4' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
