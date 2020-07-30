import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	overrides: {
		MuiTableCell: {
			root: {
				borderBottom: 'none',

				padding: '5px 10px'
			}
		},
		MuiChip: {
			root: {
				padding: 0,
				height: '25px'
			},
			label: {
				padding: 0
			}
		}
	}
});
