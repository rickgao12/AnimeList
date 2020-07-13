import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Characters = ({ characters }) => {
	const classes = useStyles();

	const getCharacters = () => {
		return (
			<React.Fragment>
				{characters.map(({ name, img_url }) => {
					return (
						<Grid key={name} item xs={'auto'}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia className={classes.media} component="img" alt={name} image={img_url} />
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
				{characters ? getCharacters() : <CircularProgress />}
			</Grid>
		</div>
	);
};

export default Characters;
