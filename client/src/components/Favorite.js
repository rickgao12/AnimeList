import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../actions';
import Tile from './Tile';
import { GridList, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useWidth } from '../utils/Width';


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
	text: { display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px' }
}));

function Favorite() {
	const classes = useStyles();
	const width = useWidth();
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);

	useEffect(() => {
		dispatch(fetchFavorites());
	}, []);
	const getCols = () => (width === 'xl' ? 5 : width === 'lg' ? 4 : width === 'md' ? 3 : width === 'sm' ? 2 : 1);

	const renderFavList = () => {
		if (favorites.length > 0) {
			return favorites.map(({ anime }) => {
				return (
					<div key={anime[0].title} className={classes.root}>
						<Tile title={anime[0].title} image_url={anime[0].imgUrl} mal_id={anime[0].mal_id} />
					</div>
				);
			});
		} else {
			return <div className={classes.root}>You currently do not have any favorites</div>;
		}
	};

	return (
		<div>
			{favorites.length > 0 ? (
				<Typography className={classes.text} variant="h5">
					My Favorites:
				</Typography>
			) : (
				''
			)}

			<GridList
				className={classes.gridList}
				cols={getCols()}
				cellHeight={250}
				style={{ overflow: 'hidden', marginTop: '1%' }}
			>
				{renderFavList()}
			</GridList>
		</div>
	);
}

export default Favorite;
