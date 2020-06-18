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
		const { location } = this.props;
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
				{this.state.animeList.map((anime) => {
					return (
						<div class="col s12 m6 l12	">
							<div class="card small horizontal">
								<div class="card-image">
									<img src={anime.image_url} alt={anime.title} />
								</div>
								<div class="card-stacked">
									<div class="card-content">
										<span class="card-title">{anime.title}</span>
										<p>{anime.synopsis}</p>
									</div>
									<div class="card-action">
										<a href={anime.url}>Learn more</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Search;
