import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AnimeEntry from './AnimeEntry';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AnimeContext } from './AnimeContext';

const useStyles = makeStyles(() => ({
	root: {},
	container: {}
}));

const Search = (props) => {
	const [ animeList, setAnimeList ] = useState([]);
	const classes = useStyles();

	const { anime } = useContext(AnimeContext);
	const [ loaded, setLoaded ] = useState(false);
	useEffect(
		() => {
			const fetchData = async () => {
				setLoaded(false);
				const search = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${anime}`);
				if (anime === undefined) return new Error('Undefined anime title');
				setAnimeList(search.data.results);
				setLoaded(true);
			};
			fetchData();
		},
		[ anime ]
	);

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
