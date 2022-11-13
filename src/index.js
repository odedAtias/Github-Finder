//	React tools imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//	Stylesheet imports
import './index.css';

//	Components imports
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
