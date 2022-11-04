//Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
//npm dependencies imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Contexts imports
import { GithubProvider } from './Context/Github/GithubContext';

function App() {
	return (
		<GithubProvider>
			<BrowserRouter>
				<div className='flex flex-col justify-between h-screen'>
					<Navbar />

					<main className='container mx-auto px-16 p-12'>
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
		</GithubProvider>
	);
}

export default App;
