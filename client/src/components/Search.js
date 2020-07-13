import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AnimeEntry from './AnimeEntry';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AnimeContext } from './AnimeContext';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
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
		<div>
			<Grid container style={{ marginTop: 20 }} alignItems="flex-start" justify="center" spacing={0}>
				{loaded && anime ? (
					animeList.map(({ mal_id, image_url, title, synopsis, url }) => {
						return (
							<Grid item key={title} xs={'auto'} style={{ margin: 10 }}>
								<AnimeEntry
									mal_id={mal_id}
									image_url={image_url}
									title={title}
									synopsis={synopsis}
									url={url}
								/>
							</Grid>
						);
					})
				) : loaded && !anime ? (
					<div className={classes.root}>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Typography align="center" variant="h4">
								Start searching for your favorite anime!
							</Typography>
							<Typography align="center" variant="h5">
								Results will appear here!
							</Typography>
						</div>
					</div>
				) : (
					<CircularProgress />
				)}
			</Grid>
		</div>
	);
};

export default Search;
