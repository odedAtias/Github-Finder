//Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
//npm dependencies imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />

				<main className='container mx-auto px-3 pb-12'>
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
