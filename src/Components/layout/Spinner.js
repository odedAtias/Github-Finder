import React, { Fragment } from 'react';
import spinner from '../features/spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='Loading ...'
				style={{ width: '200px', display: 'block', margin: 'auto' }}
			/>
		</Fragment>
	);
};

export default Spinner;
