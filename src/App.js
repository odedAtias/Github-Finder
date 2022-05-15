import React, { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/layout/users/Users';
import Search from './Components/layout/users/Search';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });
		// fetch api from github
		const res = await fetch(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const data = await res.json();
		this.setState({ users: data, loading: false });
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
