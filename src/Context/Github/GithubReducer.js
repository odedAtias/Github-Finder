const GithubReducer = (state, action) => {
	switch (action.type) {
		// Case of fetching data from the github api
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default GithubReducer;
