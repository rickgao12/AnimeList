import React, { Component } from 'react';
import axios from 'axios';

const queryString = require('query-string');

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animeList: []
		};
	}

	async componentDidMount() {
		const { match, location } = this.props;
		const { anime } = queryString.parse(location.search);

		const search = await axios.get(
			`https://api.jikan.moe/v3/search/anime?q=${anime}&letter=${anime}&order_by=members`
		);
		const data = search.data.results;

		this.setState({ animeList: data });
	}

	render() {
		return (
			<div>
				<div>
					{this.state.animeList.map((anime) => {
						return (
							<div>
								<p>
									{anime.title}, {anime.score}
								</p>
								<img src={anime.image_url} alt={anime.title} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Search;
