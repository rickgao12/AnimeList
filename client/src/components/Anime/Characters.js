import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 150
	},
	media: {
		height: 200,
		width: '100%',
		objectFit: 'cover'
	}
}));

const Characters = ({ id }) => {
	const classes = useStyles();
	const [ characters, setCharacters ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);

	useEffect(
		() => {
			const getCharacterInfo = async () => {
				const fetchData = await axios.get(`https://api.jikan.moe/v3/anime/${id}/characters_staff`);
				setCharacters(
					fetchData.data.characters.map((character) => {
						return { name: character.name, img_url: character.image_url };
					})
				);
				setLoaded(true);
			};
			getCharacterInfo();
		},
		[ id ]
	);

	const getCharacters = () => {
		return (
			<React.Fragment>
				{characters.map(({ name, img_url }) => {
					return (
						<Grid key={name} item xs={'auto'}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										component="img"
										alt={name}
										image={img_url}
										loading="lazy"
									/>

									<CardContent>
										<Typography gutterBottom style={{ fontSize: '14px' }}>
											{name}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})}
			</React.Fragment>
		);
	};

	return (
		<div>
			<Grid justify="center" container xl={12} spacing={1}>
				<Grid item xs={12}>
					<Typography style={{ marginLeft: '5px' }} gutterBottom variant="h6" component="h6">
						{`All Characters (${characters.length} found)`}
					</Typography>
				</Grid>
				{loaded && characters ? getCharacters() : <CircularProgress />}
			</Grid>
		</div>
	);
};

export default Characters;
