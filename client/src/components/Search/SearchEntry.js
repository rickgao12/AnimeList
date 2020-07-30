import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = () => ({
	root: {
		width: 400
	},
	media: {
		height: 500,
		width: '100%',
		objectFit: 'cover'
	}
});

class SearchEntry extends Component {
	render() {
		const { image_url, title, synopsis, classes, mal_id } = this.props;

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
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(styles)(SearchEntry);
