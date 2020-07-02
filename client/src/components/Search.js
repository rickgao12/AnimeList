import React, { Component } from 'react';
import axios from 'axios';
import AnimeEntry from './AnimeEntry';
import Grid from '@material-ui/core/Grid';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';

const queryString = require('query-string');

const styles = () => ({
	root: {},
	container: {}
});

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
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container style={{ marginTop: 20 }} alignItems="flex-start" justify="center" spacing={0}>
					{this.state.animeList.map(({ image_url, title, synopsis, url }) => {
						return (
							<Grid item xs={'auto'} md={'auto'} lg={'auto'} xl={'auto'} style={{ margin: 10 }}>
								<AnimeEntry image_url={image_url} title={title} synopsis={synopsis} url={url} />
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Search);
