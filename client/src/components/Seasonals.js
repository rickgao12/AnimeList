import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Typography, CircularProgress } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

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
	text: {
		display: 'flex',
		alignItems: 'center',
		margin: '20px'
	}
}));

const Seasonals = () => {
	const [ seasonalList, setSeasonalList ] = useState([]);
	const [ seasonName, setSeasonName ] = useState('');
	const [ seasonYear, setSeasonYear ] = useState('');
	const [ loaded, setLoaded ] = useState(false);
	const [ laterDataLoaded, setLaterDataLoaded ] = useState(false);

	const [ laterAnimeList, setLaterAnimeList ] = useState([]);

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

	return (
		<div>
			<Typography className={classes.text} variant="h5">
				<WhatshotIcon />
				Top Picks for: {seasonName} {seasonYear}
			</Typography>
			<GridList cellHeight={250} className={classes.gridList} style={{ overflow: 'hidden' }}>
				{loaded ? (
					seasonalList.map(({ image_url, title, synopsis }) => {
						return (
							<div style={{ width: '20%' }} className={classes.root}>
								<GridListTile className={classes.tile}>
									<img className={classes.tile} style={{}} src={image_url} alt={title} />
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
			<Typography style={{ marginTop: '5%' }} className={classes.text} variant="h5">
				<CalendarTodayIcon style={{ marginRight: '1%' }} />
				Anime Coming Soon!
			</Typography>
			<GridList cellHeight={250} className={classes.gridList} style={{ overflow: 'hidden' }}>
				{laterDataLoaded ? (
					laterAnimeList.map(({ image_url, title, synopsis }) => {
						return (
							<div style={{ width: '20%' }} className={classes.root}>
								<GridListTile className={classes.tile}>
									<img className={classes.tile} style={{}} src={image_url} alt={title} />
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
	);
};

export default Seasonals;
