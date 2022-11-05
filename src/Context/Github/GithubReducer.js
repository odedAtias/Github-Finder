const GithubReducer = (state, action) => {
	switch (action.type) {
		// Case of fetching data from the github api
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case 'LOADING':
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default GithubReducer;
