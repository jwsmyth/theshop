import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CHECKOUT } from '../actions';

const Checkout = () => {
	const dispatch = useDispatch();
	const css = useStyles();

	const checkout = () => {
		dispatch(CHECKOUT());
	};

	return (
		<>
			<div className={css.btns}>
				<Link to="/">
					<Button variant="contained" color="primary">
						Shop more
					</Button>
				</Link>
				<Link to="/checkedout">
					<Button variant="contained" color="secondary" onClick={checkout}>
						Checkout
					</Button>
				</Link>
			</div>
		</>
	);
};

export default Checkout;

const useStyles = makeStyles(() => ({
	btns: {
		marginTop: '2rem',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '4rem',
	},
}));
