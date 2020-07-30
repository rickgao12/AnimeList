import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const SearchEntry = React.lazy(() => import('../Search/SearchEntry'));

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 30,
		marginBottom: 30
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));
const TopAnime = () => {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ page, setPage ] = useState(1);
	const classes = useStyles();
	useEffect(
		() => {
			window.scrollTo(0, 0);
			const fetchData = async () => {
				const search = await axios.get(`https://api.jikan.moe/v3/top/anime/${page}`);
				setData(search.data.top);
				setLoading(false);
			};
			fetchData();
		},
		[ page ]
	);
	return (
		<div className={classes.root}>
			<div className={classes.button}>
				<Button
					variant="contained"
					color="primary"
					style={{ marginRight: '5px' }}
					onClick={() => {
						page > 1 && setPage(page - 1);
					}}
				>
					Prev Page
				</Button>
				<Button variant="contained" color="primary" onClick={() => setPage(page + 1)}>
					Next Page
				</Button>
			</div>
			<Grid container style={{ marginTop: 20 }} alignItems="flex-start" justify="center" spacing={0}>
				{!loading ? (
					data.map(({ mal_id, image_url, title }) => {
						return (
							<Grid item key={title} xs={'auto'} style={{ margin: 10 }}>
								<Suspense fallback={<CircularProgress />}>
									<SearchEntry mal_id={mal_id} image_url={image_url} title={title} />
								</Suspense>
							</Grid>
						);
					})
				) : (
					<CircularProgress />
				)}
			</Grid>
			<div className={classes.button}>
				<Button
					variant="contained"
					color="primary"
					style={{ marginRight: '5px' }}
					onClick={() => {
						page > 1 && setPage(page - 1);
					}}
				>
					Prev Page
				</Button>
				<Button variant="contained" color="primary" onClick={() => setPage(page + 1)}>
					Next Page
				</Button>
			</div>
		</div>
	);
};

export default TopAnime;
