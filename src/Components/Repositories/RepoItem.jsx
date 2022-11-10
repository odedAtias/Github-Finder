// Npm dependencies imports
import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaCodeBranch } from 'react-icons/fa';

const RepoItem = ({ repo }) => {
	//Repository data
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo;

	return (
		<div className='mb-2 rounded-md card'>
			<div className='card-body  bg-slate-100 hover:bg-slate-300'>
				{/* heading */}
				<h3 className='mb-2 text-sm lg:text-xl font-semibold text-blue-600'>
					<a href={html_url} target='_blank' rel='noreferrer'>
						<FaLink className='inline mr-2  text-blue-600' />
						{name}
					</a>
				</h3>
				{/* description */}
				<p className='mb-3 text-xs lg:text-xl'>{description}</p> 
				<div>
					{/* watechers count */}
					<div className='mr-4 p-2 badge badge-info badge-lg'>
						<FaEye className='text-center mr-2' /> {watchers_count}
					</div>
					{/* stargazers count */}
					<div className='mr-4 p-2 badge badge-success badge-lg'>
						<FaStar className='text-center mr-2' /> {stargazers_count}
					</div>
					{/* open issues */}
					<div className='mr-4 p-2 badge badge-error badge-lg'>
						<FaInfo className='text-center mr-2' /> {open_issues}
					</div>
					{/* forks */}
					<div className='mr-4 p-2 badge badge-warning badge-lg'>
						<FaCodeBranch className='text-center mr-2' /> {forks}
					</div>
				</div>
			</div>
		</div>
	);
};

//PropTypes
RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
