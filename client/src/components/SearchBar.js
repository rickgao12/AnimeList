import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import Search from './Search.js';

const useStyles = makeStyles((theme) => ({
	searchContainer: {
		display: 'flex',
		paddingLeft: '20px',
		paddingRight: '20px',
		marginTop: '5vh',
		marginBottom: '5px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	searchIcon: {
		alignSelf: 'center',
		marginRight: '10px',
		marginBottom: '2px'
	},
	searchInput: {
		width: '60vw'
	},
	utilButtons: {
		margin: '5px'
	}
}));

const SearchBar = () => {
	const classes = useStyles();

	const [ filter, setFilter ] = useState('');
	const [ anime, setAnime ] = useState('');

	return (
		<div>
			<div className={classes.searchContainer}>
				<form
					style={{
						display: 'flex',
						alignItems: 'center'
					}}
					onSubmit={(e) => {
						e.preventDefault();
						setAnime(filter);
					}}
					onReset={() => {
						setAnime('');
						setFilter('');
					}}
				>
					<SearchIcon className={classes.searchIcon} />
					<TextField
						className={classes.searchInput}
						label=""
						placeholder="Search for your favorite anime"
						variant="standard"
						onChange={(e) => setFilter(e.target.value)}
						InputProps={{ disableUnderline: true }}
					/>
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
				</form>
			</div>
			<div>
				<Search anime={anime} />
			</div>
		</div>
	);
};

export default SearchBar;
