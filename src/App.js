//Components imports
import Navbar from './Components/Layout/Navbar';
//npm dependencies imports
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar />
			</div>
			<main>Content</main>
		</BrowserRouter>
	);
}

export default App;
