//	Main component
const About = () => {
	//	Main local variables
	const myRepoUrl = 'https://github.com/odedAtias/Github-Finder';

	return (
		<div className='hero bg-base-200 rounded-xl'>
			<div className='hero-content text-center p-10'>
				<div className='max-w-md'>
					{/* About Heading */}
					<h1 className='text-4xl font-bold'>Github Finder</h1>
					<p className='pt-6'>
						GitHub Finder is used as an external search engine of GitHub, which
						makes it easy to find the users and her details of all developers
						registered to GitHub.
					</p>
					<p className='py-4 font-bold'>Version 1.0.0</p>
					{/* Link to my project repo */}
					<a
						href={myRepoUrl}
						target='_blank'
						rel='noreferrer'
						className='btn btn-sm hover:bg-gray-300 border-none hover:text-neutral rounded-xl sm:btn-sm md:btn-md'>
						Learn More
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
