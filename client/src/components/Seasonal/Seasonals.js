import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GridList, Typography, CircularProgress } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tile from '../Tile';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	gridList: {
		display: 'flex',
		justifyContent: 'center',
		height: 'auto'
	},
	text: { display: 'flex', alignItems: 'center', margin: '20px' }
}));

function useWidth() {
	const theme = useTheme();
	const keys = [ ...theme.breakpoints.keys ].reverse();
	return (
		keys.reduce((output, key) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useMediaQuery(theme.breakpoints.up(key));
			return !output && matches ? key : output;
		}, null) || 'xs'
	);
}

const Seasonals = () => {
	const [ seasonalList, setSeasonalList ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);
	const [ laterDataLoaded, setLaterDataLoaded ] = useState(false);
	const [ laterAnimeList, setLaterAnimeList ] = useState([]);
	const width = useWidth();
	const classes = useStyles();

	useEffect(() => {
		const getSeasonalData = async () => {
			const search = await axios.get('https://api.jikan.moe/v3/season');
			setSeasonalList({ ...search.data, anime: search.data.anime.slice(0, 15) });
			setLoaded(true);
		};
		getSeasonalData();
	}, []);

	useEffect(() => {
		const getFutureData = async () => {
			const search = await axios.get('https://api.jikan.moe/v3/season/later');
			const { anime } = search.data;
			setLaterAnimeList(anime.slice(0, 15));
			setLaterDataLoaded(true);
		};

		getFutureData();
	}, []);

	const getCols = () => (width === 'xl' ? 5 : width === 'lg' ? 4 : width === 'md' ? 3 : width === 'sm' ? 2 : 1);

	return (
		<div>
			<div>
				<div className={classes.text}>
					<WhatshotIcon style={{ fill: 'red', marginRight: '10px' }} />
					<Typography variant="h5">
						Top Picks for: &nbsp;
						<span style={{ color: 'blue' }}>
							{seasonalList.season_name} {seasonalList.season_year}
						</span>
					</Typography>
				</div>

				<GridList cols={getCols()} cellHeight={250} className={classes.gridList} style={{ overflow: 'hidden' }}>
					{loaded ? (
						seasonalList.anime.map(({ image_url, title, mal_id, score }) => {
							return (
								<div key={title} className={classes.root}>
									<Tile mal_id={mal_id} image_url={image_url} title={title} score={score} />
								</div>
							);
						})
					) : (
						<CircularProgress style={{ width: '5%', height: '5%' }} />
					)}
				</GridList>
			</div>

			<div>
				<div className={classes.text}>
					<CalendarTodayIcon style={{ fill: 'red', marginRight: '10px' }} />
					<Typography variant="h5">Anime Coming Soon!</Typography>
				</div>

				<GridList cols={getCols()} cellHeight={250} className={classes.gridList} style={{ overflow: 'hidden' }}>
					{laterDataLoaded ? (
						laterAnimeList.map(({ image_url, title, mal_id, score }) => {
							return (
								<div key={title} className={classes.root}>
									<Tile mal_id={mal_id} image_url={image_url} title={title} score={score} />
								</div>
							);
						})
					) : (
						<CircularProgress style={{ width: '5%', height: '5%' }} />
					)}
				</GridList>
			</div>
		</div>
	);
};

export default Seasonals;
