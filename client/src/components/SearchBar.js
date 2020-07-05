import React, { useState, memo, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button, FormControl } from '@material-ui/core';
import { AnimeContext } from './AnimeContext';

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

const SearchBar = memo(() => {
	const classes = useStyles();

	const { setAnime } = useContext(AnimeContext);

	const [ filter, setFilter ] = useState('');

	const handleChange = (e) => {
		setFilter(e.target.value);
	};

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
						setFilter('');
					}}
					onReset={() => {
						setAnime('');
						setFilter('');
					}}
				>
					<SearchIcon className={classes.searchIcon} />
					<FormControl>
						<Input
							value={filter}
							className={classes.searchInput}
							placeholder="Search for your favorite anime..."
							onChange={handleChange}
							disableUnderline={true}
						/>
					</FormControl>

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
		</div>
	);
});

export default SearchBar;
