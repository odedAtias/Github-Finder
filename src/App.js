//Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
//npm dependencies imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='h-screen'>
				<div className='flex flex-col justify-between'>
					<Navbar />
				</div>
				<main className='h-5/6 grid place-content-center p-5 lg:p-0'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/notfound' element={<NotFound />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
