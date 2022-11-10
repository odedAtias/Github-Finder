// Npm dependencies
import PropTypes from 'prop-types';
// Components imports
import RepoItem from './RepoItem';

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
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
};

RepoList.protoTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
