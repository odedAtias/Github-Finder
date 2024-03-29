//npm dependencies imports
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//PropTypes
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
	return (
		<nav className='navbar mb-12 shadow-lg bg-primary text-primary-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<BsGithub className='inline pr-2 text-4xl' />
					<Link to='/' className='text-lg font-bold align-middle'>
						{title}
					</Link>
				</div>
				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
							HOME
						</Link>
						<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
							ABOUT
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
};

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
