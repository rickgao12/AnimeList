import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = () => ({
	root: {
		maxWidth: 400
	},
	media: {
		height: 500,
		width: '100%',
		objectFit: 'cover'
	}
});

class AnimeEntry extends Component {
	render() {
		const { image_url, title, synopsis, url, classes, mal_id } = this.props;

		return (
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} component="img" alt={title} image={image_url} title={title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{synopsis}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Link to={`/id/${mal_id}`}>
						<Button size="small" color="primary">
							Learn more
						</Button>
					</Link>

					<Button href={url} size="small" color="primary">
						MyAnimeList
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(styles)(AnimeEntry);
