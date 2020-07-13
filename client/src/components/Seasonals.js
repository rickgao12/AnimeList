import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Typography, CircularProgress } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
	tile: {
		height: '100%',
		padding: 0
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
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

const Seasonals = (props) => {
	const [ seasonalList, setSeasonalList ] = useState([]);
	const [ seasonName, setSeasonName ] = useState('');
	const [ seasonYear, setSeasonYear ] = useState('');
	const [ loaded, setLoaded ] = useState(false);
	const [ laterDataLoaded, setLaterDataLoaded ] = useState(false);

	const [ laterAnimeList, setLaterAnimeList ] = useState([]);
	const width = useWidth();
	const classes = useStyles();

	useEffect(() => {
		const getSeasonalData = async () => {
			const search = await axios.get('https://api.jikan.moe/v3/season');
			const { anime, season_name, season_year } = search.data;

			setSeasonalList(anime.slice(0, 15));
			setSeasonName(season_name);
			setSeasonYear(season_year);
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

	const getCols = () => (width === 'xl' ? 5 : width === 'lg' ? 4 : width === 'md' ? 3 : 2);

	return (
		<div>
			<div>
				<div className={classes.text}>
					<WhatshotIcon style={{ fill: 'red', marginRight: '10px' }} />
					<Typography variant="h5">
						Top Picks for:{' '}
						<span style={{ color: 'blue' }}>
							{seasonName} {seasonYear}{' '}
						</span>
					</Typography>
				</div>

				<GridList cols={getCols()} cellHeight={250} className={classes.gridList} style={{ overflow: 'hidden' }}>
					{loaded ? (
						seasonalList.map(({ image_url, title, mal_id }) => {
							return (
								<div key={title} className={classes.root}>
									<GridListTile className={classes.tile}>
										<img className={classes.tile} style={{}} src={image_url} alt={title} />
										<GridListTileBar
											title={title}
											subtitle={<span>by: {title}</span>}
											actionIcon={
												<IconButton aria-label={`info about ${title}`} className={classes.icon}>
													<Link to={`/id/${mal_id}`}>
														<InfoIcon />
													</Link>
												</IconButton>
											}
										/>
									</GridListTile>
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
						laterAnimeList.map(({ image_url, title }) => {
							return (
								<div key={title} className={classes.root}>
									<GridListTile className={classes.tile}>
										<img className={classes.tile} src={image_url} alt={title} />
										<GridListTileBar
											title={title}
											subtitle={<span>by: {title}</span>}
											actionIcon={
												<IconButton aria-label={`info about ${title}`} className={classes.icon}>
													<InfoIcon />
												</IconButton>
											}
										/>
									</GridListTile>
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
