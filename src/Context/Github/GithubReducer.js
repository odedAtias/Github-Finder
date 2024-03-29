//	Github Reducer
const githubReducer = (state, action) => {
	switch (action.type) {
		// Case of fetching data from the github api
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case 'LOAD_USERS':
			return {
				...state,
				loading: true,
			};
		case 'CLEAR_USERS':
			return {
				...state,
				users: [],
			};
		case 'GET_USER_AND_REPOS':
			return {
				...state,
				user: action.payload.user,
				repos: action.payload.repos,
				loading: false,
			};
		default:
			return state;
	}
};

export default githubReducer;
