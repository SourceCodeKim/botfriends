import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Style from '../containers/App.css';
import Scroll from '../components/Scroll';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{return response.json()})
		.then(users => { this.setState({ robots: users })
		})

	}


	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
		console.log(event.target.value);
	}
	
	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1>BotFriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}
	


export default App