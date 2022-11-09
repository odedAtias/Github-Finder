//Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Alert from './Components/Layout/Alert';
import User from './Pages/User';
//npm dependencies imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Contexts imports
import { GithubProvider } from './Context/Github/GithubContext';
import { AlertProvider } from './Context/Alert/AlertContext';

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<BrowserRouter>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar />
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
						<Footer />
					</div>
				</BrowserRouter>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
