const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='footer footer-center p-5 bg-primary text-primary-content font-bold'>
			<div>
				<p> Github Finder | Copyright © {currentYear} - All right reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
