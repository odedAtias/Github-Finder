const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='footer p-5 bg-primary text-primary-content font-bold footer-center'>
			<div>
				<p> Github Finder | Copyright © {currentYear} - All right reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
