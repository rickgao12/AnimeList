import React from 'react';
import {
	Avatar,
	Typography,
	Divider,
	Box,
	Chip,
	Table,
	TableBody,
	TableContainer,
	TableCell,
	TableRow,
	ThemeProvider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../utils/TableTheme';

const useStyles = makeStyles((theme) => ({
	text: {
		display: 'flex',
		padding: '10px'
	},
	tableContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	tableTag: {
		minWidth: 150
	},
	tableData: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		whiteSpace: 'normal',
		wordBreak: 'break-word'
	},
	chip: {
		background: 'linear-gradient(to top, rgb(32, 180, 238), rgb(32, 132, 238))',
		color: '#fff'
	},
	large: {
		width: theme.spacing(8),
		height: theme.spacing(8)
	}
}));

const AnimeLogisticInfo = ({ anime }) => {
	const classes = useStyles();

	const createData = (tag, data) => {
		return { tag, data };
	};

	const rows = [
		createData('Score:', `${anime.score ? anime.score : '?'} / 10`),
		createData('Type:', anime.type),
		createData('Source:', anime.source),
		createData('Popularity:', `#${anime.popularity}`),
		createData('Episodes:', anime.episodes)
	];

	const showData = (animeTag, tagStr) => {
		if (animeTag) {
			return (
				<TableRow style={{ display: 'flex', alignItems: 'center' }}>
					<TableCell style={{ fontSize: '15px' }} className={classes.tableTag} component="th">
						{`${tagStr}(s):`}
					</TableCell>

					<TableCell className={classes.tableData} component="td" align="left">
						{animeTag.map(({ name }) => {
							return (
								<Box key={name} fontWeight="fontWeightLight" m={0.5}>
									<Chip className={classes.chip} label={name} onClick={handleClick} />
								</Box>
							);
						})}
					</TableCell>
				</TableRow>
			);
		}
	};

	const handleClick = () => {};

	return (
		<div>
			<div className={classes.text}>
				<Avatar className={classes.large} alt="Anime image" src={anime.image_url} />
				<div style={{ marginLeft: '90px' }}>
					<Typography component="h5" variant="h5" align="left">
						{anime.title}
					</Typography>

					<Typography>({anime.title_english})</Typography>
					<Typography>({anime.title_japanese})</Typography>
				</div>
			</div>
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
										<Box fontWeight="fontWeightLight" m={0.5}>
											<Chip className={classes.chip} label={row.data} onClick={handleClick} />
										</Box>
									</TableCell>
								</TableRow>
							))}
							{showData(anime.studios, 'Studio')}
							{showData(anime.genres, 'Genre')}
							{showData(anime.licensors, 'Licensor')}
						</TableBody>
					</Table>
				</ThemeProvider>
			</TableContainer>
		</div>
	);
};

export default AnimeLogisticInfo;
