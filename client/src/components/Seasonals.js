import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Seasonals.css';

class Seasonals extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seasonalList: [],
			season_name: '',
			season_year: ''
		};
	}

	async componentDidMount() {
		const search = await axios.get('https://api.jikan.moe/v3/season/2020/spring');
		const { anime, season_name, season_year } = search.data;

		this.setState({ seasonalList: anime, season_name, season_year });
		console.log(search);
	}

	render() {
		return (
			<div>
				<div className="row">
					{this.state.seasonalList.map((anime) => {
						return (
							<div class="seasonal col s12 m6">
								<div class="card small">
									<div class="card-image">
										<img src={anime.image_url} alt={anime.title} />
									</div>
									<div class="card-content">
										<span class="card-title">{anime.title}</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Seasonals;
