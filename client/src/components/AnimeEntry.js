import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
		const { image_url, title, synopsis, url, classes } = this.props;

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
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(styles)(AnimeEntry);
