//Npm dependencies imports
import axios from 'axios';

// Action data
const URL = `${process.env.REACT_APP_GITHUB_URL}`;
const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

// search users
export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
	});
	const response = await axios.get(`${URL}/search/users?${params}`);
	const { items } = response.data;
	return items;
};
