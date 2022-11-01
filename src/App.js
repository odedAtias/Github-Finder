//Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
//npm dependencies imports
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='h-screen'>
				<div className='flex flex-col justify-between'>
					<Navbar />
				</div>
				<main className='h-5/6'>Content</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
