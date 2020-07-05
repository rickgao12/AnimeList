import React, { Component } from 'react';
import Search from './Search';
import SearchBar from './SearchBar';

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
