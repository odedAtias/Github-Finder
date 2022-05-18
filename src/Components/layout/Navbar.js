import React from 'react';
// The way to import PropTypes
import PropTypes from 'prop-types';

function Navbar({ icon, title }) {
	return (
		<nav className='navbar btn-purple bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
		</nav>
	);
}

// Deafualt props
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};
// Props Types
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
