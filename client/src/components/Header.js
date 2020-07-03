import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	logo: {
		flexGrow: 1
	},
	label: {
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white',
		padding: 11
	},
	icon: {
		marginRight: '6px',
		color: 'white'
	}
}));
const Header = () => {
	const classes = useStyles();

	return (
		// <nav style={{ background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))' }}>
		// 	<div
		// 		style={{
		// 			marginLeft: '1%',
		// 			fontFamily: 'Roboto Slab'
		// 		}}
		// 		className="nav-wrapper"
		// 	>
		// 		<Link to="/" className="brand-logo left">
		// 			Animely
		// 		</Link>
		// 		<ul className="right hide-on-med-and-down">
		// 			<li>
		// 				<Link to="/">
		// 					<i className="material-icons left">search</i>Search
		// 				</Link>
		// 			</li>
		// 			<li>
		// 				<Link to="/seasonals">
		// 					<i className="material-icons left">visibility</i>What's airing?
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>
		<AppBar
			style={{ background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))' }}
			position="relative"
		>
			<Toolbar>
				<Typography className={classes.logo} variant="h4" color="inherit" noWrap>
					Animely
				</Typography>
				<Link to="/">
					<Button classes={{ label: classes.label }}>
						<SearchIcon className={classes.icon} />
						Search
					</Button>
				</Link>
				<Link to="/seasonals">
					<Button
						classes={{ label: classes.label }}
						style={{ display: 'flex', justifyContent: 'space-between' }}
					>
						<LiveTvIcon className={classes.icon} />
						What's airing?
					</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
