import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const CheckedOut = () => {
	const css = useStyles();

	return (
		<main className={css.main}>
			<div className={css.emptyCart}>
				<Typography variant="h5">
					Thank you for shopping at The Shop!
				</Typography>
				<Link to="/">
					<Button variant="outlined" className={css.mt}>
						Back to shop
					</Button>
				</Link>
			</div>
		</main>
	);
};

export default CheckedOut;

const useStyles = makeStyles(theme => ({
	main: {
		paddingTop: theme.spacing(3),
	},
	emptyCart: {
		textAlign: 'center',
	},
	mt: {
		marginTop: '2rem',
	},
}));
