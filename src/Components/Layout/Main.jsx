//	Components imports
import Alert from './Alert';
import About from '../../Pages/About';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import User from '../../Pages/User';

//	Npm dependencies imports
import { Route, Routes } from 'react-router-dom';

// Main component
const Main = () => {
	return (
		<main className='container mx-auto px-16 py-8'>
			<Alert />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/user/:login' element={<User />} />
				<Route path='/notfound' element={<NotFound />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</main>
	);
};

export default Main;
