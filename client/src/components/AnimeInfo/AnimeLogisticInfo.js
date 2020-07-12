import React from 'react';
import {
	Typography,
	Divider,
	Box,
	Chip,
	Table,
	TableBody,
	TableContainer,
	TableCell,
	TableHead,
	TableRow,
	ThemeProvider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './TableTheme';

const useStyles = makeStyles((theme) => ({
	text: {
		padding: '10px'
	},
	tableContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	tableTag: {
		minWidth: 200
	},
	tableData: {
		display: 'flex',
		flexDirection: 'row'
	},
	test: {
		display: 'flex'
	}
}));

const AnimeLogisticInfo = ({ anime, studios }) => {
	const classes = useStyles();

	const createData = (tag, data) => {
		return { tag, data };
	};

	const rows = [
		createData('Score:', `${anime.score} / 10`),
		createData('Type:', anime.type),
		createData('Source:', anime.source),
		createData('Popularity:', `#${anime.popularity}`),
		createData('Episodes:', anime.episodes)
	];

	const showStudios = () => {
		return (
			<TableRow className={classes.row} style={{ display: 'flex', alignItems: 'center' }} key={anime.title}>
				<TableCell style={{ fontSize: '15px' }} className={classes.tableTag} component="th">
					Studios:
				</TableCell>

				<TableCell className={classes.tableData} component="td" align="left">
					{studios.map((studio) => {
						return (
							<Box fontWeight="fontWeightLight" m={0.5}>
								<Chip
									style={{
										background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))',
										color: '#fff',
										fontSize: '13px'
									}}
									label={studio}
									onClick={handleClick}
								/>
							</Box>
						);
					})}
				</TableCell>
			</TableRow>
		);
	};
	const handleClick = () => {};
	console.log(studios);
	return (
		<div>
			<Typography className={classes.text} component="h5" variant="h5" align="left">
				{anime.title}
			</Typography>
			<Divider />

			<TableContainer>
				<ThemeProvider theme={theme}>
					<Table aria-label="simple table">
						<TableBody className={classes.tableContainer}>
							{rows.map((row) => (
								<TableRow key={row.tag}>
									<TableCell style={{ fontSize: '15px' }} className={classes.tableTag} component="th">
										{row.tag}
									</TableCell>
									<TableCell component="td" align="left">
										<Box fontWeight="fontWeightLight" m={1}>
											<Chip
												style={{
													background:
														'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))',
													color: '#fff'
												}}
												label={row.data}
												onClick={handleClick}
											/>
										</Box>
									</TableCell>
								</TableRow>
							))}
							{showStudios()}
						</TableBody>
					</Table>
				</ThemeProvider>
			</TableContainer>
		</div>
	);
};

export default AnimeLogisticInfo;
