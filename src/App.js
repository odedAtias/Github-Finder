//	Components imports
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Main from './Components/Layout/Main';

//	Npm dependencies imports
import { BrowserRouter } from 'react-router-dom';

//	Contexts imports
import { GithubProvider } from './Context/Github/GithubContext';
import { AlertProvider } from './Context/Alert/AlertContext';

// App component
function App() {
	return (
		//	Github context provider wrapper
		<GithubProvider>
			{/* Alert context provider wrapper */}
			<AlertProvider>
				<BrowserRouter>
					{/* A container that divides the ui into 3 parts */}
					<div className='flex flex-col justify-between h-screen'>
						{/* Part 1 - Navbar */}
						<Navbar />
						{/* Part 2 - Main */}
						<Main />
						{/* Part 3 - Footer */}
						<Footer />
					</div>
				</BrowserRouter>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
