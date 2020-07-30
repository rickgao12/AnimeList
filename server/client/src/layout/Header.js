import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
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
	const auth = useSelector((state) => state.auth);

	return (
		<AppBar
			style={{ background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))' }}
			position="relative"
		>
			<Toolbar disableGutters>
				<Typography className={classes.logo} variant="h4" color="inherit" noWrap>
					<Link style={{ color: 'white' }} to="/">
						Animely
					</Link>
				</Typography>

				<Button classes={{ label: classes.label }}>
					{auth ? (
						<a href="/api/logout" style={{ color: 'white' }}>
							Logout
						</a>
					) : auth === false ? (
						<a href="/auth/google" style={{ color: 'white' }}>
							Login with Google
						</a>
					) : (
						''
					)}
				</Button>
				{auth ? (
					<Link to="/favorite" style={{ color: 'white' }}>
						<Button classes={{ label: classes.label }}>Favorites</Button>
					</Link>
				) : (
					''
				)}

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
