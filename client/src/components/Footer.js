import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
	footer: {
		padding: '2%'
	}
}));

const Copyright = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant="body2" color="textSecondary" align="center">
				{'Copyright © '}
				<Link href="https://github.com/rickgao12">Rick Gao</Link> {new Date().getFullYear()}
				{'.'}
			</Typography>
		</footer>
	);
};

export default Copyright;
