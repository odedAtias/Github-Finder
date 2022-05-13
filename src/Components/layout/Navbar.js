import React, { Component } from 'react';
// The way to import PropTypes
import PropTypes from 'prop-types';

class Navbar extends Component {
	// Deafualt props
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github',
	};
	// Props Types
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	render() {
		return (
			<nav className='navbar bg-primary'>
				<h1>
					<i className={this.props.icon} /> {this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
