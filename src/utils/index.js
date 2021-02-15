import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

export const SpinnerUtil = () => {
	const css = useStyles();
	return (
		<div className={css.utilPosition}>
			<CircularProgress className={css.spinnerColor} />
		</div>
	);
};

export const ErrorUtil = () => {
	const css = useStyles();
	return (
		<div className={css.utilPosition}>
			<Alert severity="error">
				Something went wrong with the API request gathering our product list -
				please try again
			</Alert>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	utilPosition: {
		position: 'absolute',
		left: '50%',
		top: '25%',
		transform: 'translate(-50%, -25%)',
	},
	spinnerColor: {
		color: 'black',
	},
}));
