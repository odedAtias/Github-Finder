// Npm dependencies
import PropTypes from 'prop-types';

const RepoList = ({ repos }) => {
	return (
		<div className='rounded-lg shadow-lg card bg-slate-200'>
			<div className='card-body'>
				{/* RepoList header */}
				<h2 className='text-2xl my-4 font-bold card-title'>
					Last Repositories
				</h2>
				{/*  */}
				{repos.map(repo => (
					<h3>{repo.name}</h3>
				))}
			</div>
		</div>
	);
};

RepoList.protoTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
