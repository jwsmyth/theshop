import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Typography,
	IconButton,
	Card,
	CardContent,
	CardMedia,
	Divider,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Add, Remove, Delete } from '@material-ui/icons';
import {
	REMOVE_ONE_QUANTITY,
	ADD_ONE_QUANTITY,
	REMOVE_FROM_CART,
} from '../actions';
import Subtotal from './Subtotal';
import Checkout from './Checkout';

const Cart = () => {
	const { cartItems } = useSelector(state => state.cart);
	const [isEmpty, setIsEmpty] = useState(false);
	const css = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if (cartItems.length === 0) {
			setIsEmpty(true);
		}
	}, [cartItems]);

	return (
		<main className={css.main}>
			{isEmpty ? (
				<div className={css.emptyCart}>
					<Typography variant="h5">Your shopping cart is empty.</Typography>
					<Link to="/">
						<Button variant="outlined" className={css.mt}>
							Back to shop
						</Button>
					</Link>
				</div>
			) : (
				<>
					<div className={css.header}>
						<Typography variant="h6">Your shopping cart</Typography>
						<Typography variant="subtitle2" className={css.shippingInfo}>
							Free shipping when ordering over 10k!
						</Typography>
					</div>
					<Divider className={css.dividerMargin} />
					{cartItems.map(item => (
						<div key={item._id}>
							<Card className={css.root} elevation={0}>
								<CardMedia className={css.cardMedia}>
									<img
										className={css.productImage}
										src={item.image}
										title={item.name}
										alt={item.name}
									/>
								</CardMedia>
								<div className={css.details}>
									<CardContent className={css.content}>
										<Typography variant="subtitle2">{item.name}</Typography>
										<Typography variant="body2" color="textSecondary">
											{item.price_formatted}
										</Typography>
									</CardContent>
									<div className={css.quantities}>
										<IconButton
											aria-label="Remove"
											onClick={() =>
												dispatch(REMOVE_ONE_QUANTITY(item._id, item.quantity))
											}
										>
											<Remove />
										</IconButton>
										<Typography variant="subtitle2">{item.quantity}</Typography>
										<IconButton
											aria-label="Add"
											onClick={() =>
												dispatch(ADD_ONE_QUANTITY(item._id, item.quantity))
											}
										>
											<Add />
										</IconButton>
										<div className={css.deleteIcon}>
											<IconButton
												edge="end"
												aria-label="delete"
												onClick={() => dispatch(REMOVE_FROM_CART(item._id))}
											>
												<Delete />
											</IconButton>
										</div>
									</div>
								</div>
							</Card>
							<Divider className={css.dividerMargin} />
						</div>
					))}
					<Subtotal cartItems={cartItems} />
					<Checkout />
				</>
			)}
		</main>
	);
};

export default Cart;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		marginBottom: '1rem',
		height: '100%',
	},
	deleteIcon: {
		flex: 0.8,
		flexGrow: 1,
		textAlign: 'end',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cardMedia: {
		width: 100,
	},
	productImage: {
		width: '100%',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	quantities: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	main: {
		paddingTop: theme.spacing(3),
	},
	emptyCart: {
		textAlign: 'center',
	},
	mt: {
		marginTop: '2rem',
	},
	title: {
		textAlign: 'center',
		marginBottom: '2rem',
	},
	dividerMargin: {
		marginBottom: '2rem',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	shippingInfo: {
		alignSelf: 'last baseline',
	},
}));
