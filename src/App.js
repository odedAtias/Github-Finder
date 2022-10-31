//Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
//npm dependencies imports
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />
			</div>
			<main>Content</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
