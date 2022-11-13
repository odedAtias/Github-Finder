//	Npm dependencies imports
import axios from 'axios';

//	Action data
const URL = process.env.REACT_APP_GITHUB_URL;
const USERS_URL = `${URL}/users`;
const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const params = {
	client_id: CLIENT_ID,
	client_secret: CLIENT_SECRET,
};

//	search users
export const searchUsers = async text => {
	const response = await axios.get(
		`${URL}/search/users?${new URLSearchParams({
			...params,
			q: text,
		})}`
	);
	const { items } = response.data;
	return items;
};

//	Get single user data and her repositories
export const getUserAndRepos = async login => {
	const [user, repos] = await Promise.all([
		axios.get(`${USERS_URL}/${login}?${new URLSearchParams({ ...params })}`),
		axios.get(
			`${USERS_URL}/${login}/repos?${new URLSearchParams({
				...params,
				sort: 'created',
				per_page: 10,
			})}`
		),
	]);
	// 404 case
	if (user.status === 404) window.location = '/notfound';
	// 2xx case
	else return { user: user.data, repos: repos.data };
};
