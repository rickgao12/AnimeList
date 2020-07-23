import React from 'react';
import { GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	tile: {
		height: '100%',
		padding: 0
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
	}
}));

const Tile = ({ title, image_url, score, mal_id, recommendation_count }) => {
	const classes = useStyles();
	return (
		<GridListTile className={classes.tile}>
			<img className={classes.tile} src={image_url} alt={title} />
			<GridListTileBar
				title={title}
				subtitle={
					<span>
						{recommendation_count ? `Total: ${recommendation_count}` : `Score: ${score ? score : '?'} / 10`}
					</span>
				}
				actionIcon={
					<Link to={`/id/${mal_id}`}>
						<IconButton aria-label={`info about ${title}`} className={classes.icon}>
							<InfoIcon />
						</IconButton>
					</Link>
				}
			/>
		</GridListTile>
	);
};

export default Tile;
