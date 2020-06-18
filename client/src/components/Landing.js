import React, { Component } from 'react';
import axios from 'axios';

export default class Landing extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		animeList: []
	// 	};
	// }

	// async componentDidMount() {
	// 	let animeList = [];
	// 	const search = await axios.get('https://api.jikan.moe/v3/search/anime?q=kaguya');
	// 	const data = search.data.results;

	// 	this.setState({ animeList: data });
	// }

	render() {
		return (
			<div>
				{/* {this.state.animeList.map((anime) => {
					return (
						<div>
							<p>
								{anime.title}, {anime.score}
							</p>
							<img src={anime.image_url} alt={anime.title} />
						</div>
					);
				})} */}
				hello
			</div>
		);
	}
}
