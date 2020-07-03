import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeEntry from './AnimeEntry';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {},
	container: {}
}));

const Search = (props) => {
	const [ animeList, setAnimeList ] = useState([]);
	const classes = useStyles();
	const { anime } = props;
	const [ loaded, setLoaded ] = useState(false);

	useEffect(
		() => {
			const fetchData = async () => {
				setLoaded(false);
				const search = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${anime}`);
				setAnimeList(search.data.results);
				setLoaded(true);
			};
			fetchData();
		},
		[ anime ]
	);

	//const { location } = this.props;
	//const { anime } = queryString.parse(location.search);

	return (
		<div className={classes.root}>
			<Grid container style={{ marginTop: 20 }} alignItems="flex-start" justify="center" spacing={0}>
				{loaded ? (
					animeList.map(({ image_url, title, synopsis, url }) => {
						return (
							<Grid item xs={'auto'} md={'auto'} lg={'auto'} xl={'auto'} style={{ margin: 10 }}>
								<AnimeEntry image_url={image_url} title={title} synopsis={synopsis} url={url} />
							</Grid>
						);
					})
				) : (
					<CircularProgress />
				)}
			</Grid>
		</div>
	);
};

export default Search;
