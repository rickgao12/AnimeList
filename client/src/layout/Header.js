import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
	root: {},
	logo: {
		flexGrow: 1,
		marginLeft: '1%',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px'
		}
	},
	label: {
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white',

		[theme.breakpoints.down('sm')]: {
			fontSize: '11px',
			justifyContent: 'flex-end'
		}
	},
	icon: {
		marginRight: '6px',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '10px'
		}
	}
}));
const Header = () => {
	const classes = useStyles();

	return (
		<AppBar
			style={{ background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))' }}
			position="relative"
		>
			<Toolbar disableGutters>
				<Typography className={classes.logo} variant="h4" color="inherit" noWrap>
					Animely
				</Typography>
				<Link to="/">
					<Button classes={{ label: classes.label }}>
						<SearchIcon className={classes.icon} />
						Search
					</Button>
				</Link>
				<Link to="/top">
					<Button classes={{ label: classes.label }}>
						<BarChartIcon className={classes.icon} />
						Top Anime
					</Button>
				</Link>

				<Link to="/seasonals">
					<Button classes={{ label: classes.label }}>
						<LiveTvIcon className={classes.icon} />
						What's airing?
					</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
