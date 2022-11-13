//	Hooks imports
import { createContext, useReducer } from 'react';
//	Reducers imports
import alertReducer from './AlertReducer';

const AlertContext = createContext();

//	Alert context provider
export const AlertProvider = ({ children }) => {
	const initialState = null;
	const [state, dispatch] = useReducer(alertReducer, initialState);

	const setAlert = (message, type) => {
		//	post an alert for 3 seconds
		dispatch({
			type: 'SET_ALERT',
			payload: { message, type },
		});
		// remove the alert after 3 seconds
		setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 10000);
	};

	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
