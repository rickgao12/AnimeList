import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridList, CircularProgress } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Tile from '../Tile';

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
			return recommendationList.map(({ mal_id, image_url, title, score, recommendation_count }) => {
				return (
					<div key={title}>
						<Tile
							mal_id={mal_id}
							image_url={image_url}
							title={title}
							recommendation_count={recommendation_count}
						/>
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
