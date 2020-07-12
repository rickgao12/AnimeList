import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import Recommendations from '../Recommendations';
import AnimeLogisticInfo from './AnimeLogisticInfo';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		marginTop: theme.spacing(3),
		padding: theme.spacing(2)
		//height: '100%'
	},

	CardContent: {
		padding: 16,
		'&:last-child': {
			paddingBottom: '16px'
		}
	},
	media: {
		margin: '0 auto',
		height: 500,
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
		margin: 20
	}
}));

const AnimeInfo = ({ match }) => {
	const classes = useStyles();

	const id = match.params.id;
	const [ animeData, setAnimeData ] = useState('');
	const [ studio, setStudio ] = useState([]);

	useEffect(
		() => {
			const getAnimeInfo = async () => {
				const fetchData = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
				setAnimeData(fetchData.data);
				setStudio(fetchData.data.studios.map((studio) => studio.name));
			};
			getAnimeInfo();
		},
		[ id ]
	);

	//[Type, Score, Source, Popularity, Episodes, Aired]
	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={2}>
					<Paper elevation={2} className={classes.paper}>
						<CardMedia
							style={{ borderRadius: '10px' }}
							component="img"
							image={animeData.image_url}
							alt={animeData.title}
						/>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<Paper elevation={2} className={classes.paper}>
						<AnimeLogisticInfo anime={animeData} studios={studio} />
					</Paper>
				</Grid>

				<Grid item xs={4}>
					<Paper elevation={2} className={classes.paper}>
						<Typography style={{ margin: '5px 0' }} align="left" variant="h5">
							Synopsis
						</Typography>
						<Typography align="left">{animeData.synopsis}</Typography>
					</Paper>
				</Grid>

				<Grid item xs={9}>
					<Paper elevation={1} className={classes.paper}>
						<Typography variant="h5">Anime similar to {animeData.title}</Typography>
						<Recommendations id={id} />
					</Paper>
				</Grid>

				<Grid item xs={7}>
					<Paper elevation={2} className={classes.paper}>
						PLACEHOLDER
					</Paper>
				</Grid>

				{/* <Grid item container xs={12} md={6} lg={6} spacing={0}>
				<Grid item xs={6} md={12} xl={6}>
					<Card variant="outlined">
						<CardContent
							style={{ display: 'flex', justifyContent: 'center' }}
							className={classes.CardContent}
						>
							<Typography align="left" display="initial">
								Type:&nbsp;
							</Typography>
							<Typography>{animeData.type}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6} md={12} xl={6}>
					<Card variant="outlined">
						<CardContent
							style={{ display: 'flex', justifyContent: 'center' }}
							className={classes.CardContent}
						>
							<Typography align="left" display="initial">
								Score:&nbsp;
							</Typography>
							<Typography>{animeData.score}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6} md={12} xl={6}>
					<Card variant="outlined">
						<CardContent
							style={{ display: 'flex', justifyContent: 'center' }}
							className={classes.CardContent}
						>
							<Typography align="left" display="initial">
								Source:&nbsp;
							</Typography>
							<Typography>{animeData.source}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6} md={12} xl={6}>
					<Card variant="outlined">
						<CardContent
							style={{ display: 'flex', justifyContent: 'center' }}
							className={classes.CardContent}
						>
							<Typography align="left" display="initial">
								Popularity:&nbsp;
							</Typography>
							<Typography>#{animeData.popularity}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6} md={12} xl={6}>
					<Card variant="outlined">
						<CardContent
							style={{ display: 'flex', justifyContent: 'center' }}
							className={classes.CardContent}
						>
							<Typography align="left" display="initial">
								Episodes:&nbsp;
							</Typography>
							<Typography>{animeData.episodes}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6} md={12} xl={6}>
					<Card variant="outlined">
						<CardContent className={classes.CardContent}>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<Typography display="initial">Studios:&nbsp;</Typography>
								<Typography noWrap>{studio.join()}</Typography>
							</div>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={12} xl={12}>
					<Card variant="outlined">
						<CardContent
							style={{ display: 'flex', justifyContent: 'center' }}
							className={classes.CardContent}
						>
							<Typography variant="h5">Synopsis</Typography>
							<Typography style={{ padding: '5px' }} align="left">
								{animeData.synopsis}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid item xs={12} md={6} lg={6}>
				<CardMedia
					style={{ borderRadius: '10px' }}
					className={classes.media}
					component="img"
					image={animeData.image_url}
					alt={animeData.title}
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.text} variant="h5">
					Anime similar to {animeData.title}
				</Typography>
				<Recommendations id={id} />
			</Grid> */}
			</Grid>
		</div>
	);
};

export default AnimeInfo;
