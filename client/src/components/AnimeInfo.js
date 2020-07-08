import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2)
	},

	CardContent: {
		padding: 0,
		'&:last-child': {
			paddingBottom: 0
		}
	},
	media: {
		margin: '0 auto',
		height: 500,
		width: '90%',
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
	}
}));

const AnimeInfo = ({ match }) => {
	const classes = useStyles();

	const id = match.params.id;
	const [ animeData, setAnimeData ] = useState('');
	const renders = useRef(0);

	useEffect(() => {
		const getAnimeInfo = async () => {
			// const fetchData = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
			// setAnimeData(fetchData.data);
		};
		//getAnimeInfo();
	}, []);

	console.log('hello world');
	return (
		<Paper elevation={3} className={classes.paper}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography component="h1" variant="h4" align="left">
						Jojo no Kimyou na Bouken
					</Typography>
				</Grid>
				<Grid item container xs={12} md={6} lg={6} spacing={2}>
					<Grid item xs={6} md={12} xl={6}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography align="left" display="initial">
									Type:&nbsp;
								</Typography>
								<Typography>TV</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6} md={12} xl={6}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography align="left" display="initial">
									Score:&nbsp;
								</Typography>
								<Typography>7.13</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6} md={12} xl={6}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography align="left" display="initial">
									Source:&nbsp;
								</Typography>
								<Typography>Manga</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6} md={12} xl={6}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography align="left" display="initial">
									Popularity:&nbsp;
								</Typography>
								<Typography>#1027</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6} md={12} xl={6}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography align="left" display="initial">
									Episodes:&nbsp;
								</Typography>
								<Typography>6</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6} md={12} xl={6}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography display="initial">Aired:&nbsp;</Typography>
								<Typography>Nov 19, 1993 - Nov 18, 1994</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={12} xl={12}>
						<Card>
							<CardContent
								style={{ display: 'flex', justifyContent: 'center' }}
								className={classes.CardContent}
							>
								<Typography style={{ padding: '5px' }} align="left">
									Kujo Jotaro is a normal, popular Japanese high-schooler, until he thinks that he is
									possessed by a spirit, and locks himself in prison. After seeing his grandfather,
									Joseph Joestar, and fighting Joseph's friend Muhammad Abdul, Jotaro learns that the
									"Spirit" is actually Star Platinum, his Stand, or fighting energy given a semi-solid
									form. Later, his mother gains a Stand, and becomes sick. Jotaro learns that it is
									because the vampire Dio Brando has been revived 100 years after his defeat to
									Jonathan Joestar, Jotaro's great-great-grandfather. Jotaro decides to join Joseph
									and Abdul in a trip to Egypt to defeat Dio once and for all.
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
						image="https://cdn.myanimelist.net/images/anime/1801/104558.jpg?s=0536a9f22ce06d403ec17055d03a61b3"
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default AnimeInfo;
