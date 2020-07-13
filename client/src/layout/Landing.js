import React, { Component } from 'react';
import Search from '../components/Search';
import SearchBar from '../components/SearchBar';

export default class Landing extends Component {
	render() {
		return (
			<div>
				<SearchBar />
				<Search />
			</div>
		);
	}
}
