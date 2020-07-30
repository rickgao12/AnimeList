import React, { Component } from 'react';
import Search from '../components/Search/Search';
import SearchBar from '../components/Search/SearchBar';

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
