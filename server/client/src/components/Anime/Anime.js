import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import Recommendations from './Recommendations';
import Stats from './Stats';
import Characters from './Characters';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		marginTop: theme.spacing(3),
		padding: theme.spacing(2)
	},
	CardContent: {
		padding: 16,
		'&:last-child': {
			paddingBottom: '16px'
		}
	},
	media: {
		margin: '0 auto',
		height: 100,
		width: '70%',
		objectFit: 'cover',
		[theme.breakpoints.down('lg')]: {
			height: 400
		},

		[theme.breakpoints.down('sm')]: {
			width: '50%',
			height: 300,
			margin: 0
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		}
	},
	text: {
		margin: '10px 0'
	}
}));

const AnimeInfo = ({ match }) => {
	const classes = useStyles();

	const id = match.params.id;
	const [ animeData, setAnimeData ] = useState('');

	const getSong = (theme, array) => {
		if (array) {
			if (array.length > 0) {
				return array.join(', ');
			} else {
				return `No ${theme} found`;
			}
		}
	};

	useEffect(
		() => {
			const getAnimeInfo = async () => {
				const fetchData = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
				setAnimeData(fetchData.data);
			};
			getAnimeInfo();
		},
		[ id ]
	);

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={12} md={6} xl={5}>
					<Paper elevation={2} className={classes.paper}>
						<Stats anime={animeData} />
					</Paper>
				</Grid>

				<Grid item xs={12} md={6} xl={7}>
					<Paper elevation={2} className={classes.paper}>
						<Typography className={classes.text} variant="h5">
							Anime similar to {animeData.title}
						</Typography>

						<Recommendations id={id} />

						<Typography style={{ marginTop: '23px' }} className={classes.text} variant="h6">
							Opening Themes:
							<Typography noWrap>{getSong('opening themes', animeData.opening_themes)}</Typography>
						</Typography>
						<Typography className={classes.text} variant="h6">
							Ending Themes:
							<Typography noWrap>{getSong('ending themes', animeData.ending_themes)}</Typography>
						</Typography>
					</Paper>
				</Grid>

				<Grid item xs={12} md={12} xl={5}>
					<Paper elevation={2} className={classes.paper}>
						<Typography className={classes.text} align="left" variant="h5">
							Synopsis
						</Typography>
						<Typography align="left">
							{animeData.synopsis ? animeData.synopsis : 'No synopsis found'}
						</Typography>
					</Paper>
				</Grid>

				<Grid item xs={12} xl={7}>
					<Paper elevation={2} className={classes.paper}>
						<Characters id={id} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default AnimeInfo;
