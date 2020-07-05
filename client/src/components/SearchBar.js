import React, { useState, memo, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Input, Button, FormControl } from '@material-ui/core';
import { AnimeContext } from './AnimeContext';

const useStyles = makeStyles((theme) => ({
	searchContainer: {
		display: 'flex',
		paddingLeft: '20px',
		paddingRight: '20px',
		marginTop: '5vh',
		marginBottom: '5px',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap'
		}
	},
	searchIcon: {
		alignSelf: 'center',
		marginRight: '10px'
	},
	searchInput: {
		width: '50vw'
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	utilButtons: {
		margin: '5px'
	}
}));

const SearchBar = memo(() => {
	const classes = useStyles();

	const { setAnime } = useContext(AnimeContext);

	const [ filter, setFilter ] = useState('');

	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div>
			<div>
				<form
					className={classes.searchContainer}
					onSubmit={(e) => {
						e.preventDefault();
						setAnime(filter);
						setFilter('');
					}}
					onReset={() => {
						setAnime('');
						setFilter('');
					}}
				>
					<SearchIcon className={classes.searchIcon} />
					<FormControl>
						<TextField
							value={filter}
							className={classes.searchInput}
							placeholder="Search for your favorite anime..."
							onChange={handleChange}
							InputProps={{
								disableUnderline: true
							}}
						/>
					</FormControl>
					<div className={classes.buttonContainer}>
						<Button
							variant="contained"
							style={{
								color: 'white',
								background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))'
							}}
							type="submit"
							className={classes.utilButtons}
						>
							Submit
						</Button>
						<Button
							type="reset"
							variant="contained"
							style={{
								color: 'white',
								background: 'linear-gradient(to top, rgb(255, 115, 241), rgb(247, 22, 225))'
							}}
							className={classes.utilButtons}
						>
							Clear
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
});

export default SearchBar;
