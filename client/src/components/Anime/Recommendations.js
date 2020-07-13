import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridListTile, GridListTileBar, IconButton, GridList, CircularProgress } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';

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
	}
}));

function useWidth() {
	const theme = useTheme();
	const keys = [ ...theme.breakpoints.keys ].reverse();
	return (
		keys.reduce((output, key) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useMediaQuery(theme.breakpoints.up(key));
			return !output && matches ? key : output;
		}, null) || 'xs'
	);
}

const Recommendations = ({ id }) => {
	const classes = useStyles();
	const width = useWidth();
	const [ loaded, setLoaded ] = useState(false);

	const [ recommendationList, setRecommendationList ] = useState([]);

	useEffect(
		() => {
			const getRecommendations = async () => {
				const fetchData = await axios.get(`https://api.jikan.moe/v3/anime/${id}/recommendations`);
				setRecommendationList(fetchData.data.recommendations.slice(0, 5));
				setLoaded(true);
			};
			getRecommendations();
		},
		[ id ]
	);

	const renderRecList = () => {
		if (recommendationList.length > 1) {
			return recommendationList.map(({ mal_id, image_url, title }) => {
				return (
					<div key={title}>
						<GridListTile className={classes.tile}>
							<img className={classes.tile} src={image_url} alt={title} />
							<GridListTileBar
								title={title}
								subtitle={<span>by: {title}</span>}
								actionIcon={
									<Link to={`/id/${mal_id}`}>
										<IconButton aria-label={`info about ${title}`} className={classes.icon}>
											<InfoIcon />
										</IconButton>
									</Link>
								}
							/>
						</GridListTile>
					</div>
				);
			});
		} else {
			return <div style={{ height: '30%' }}>No recommendations found</div>;
		}
	};

	const getCols = () => (width === 'xl' ? 5 : width === 'lg' ? 4 : width === 'md' ? 3 : 2);

	return (
		<div>
			<GridList className={classes.gridList} cols={getCols()} cellHeight={250} style={{ overflow: 'hidden' }}>
				{loaded ? renderRecList() : <CircularProgress style={{ width: '5%', height: '5%' }} />}
			</GridList>
		</div>
	);
};

export default Recommendations;
