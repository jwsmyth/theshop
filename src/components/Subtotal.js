import {
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

const Subtotal = ({ cartItems }) => {
	const [orderPrice, setOrderPrice] = useState(null);
	const [shippingPrice, setShippingPrice] = useState(null);
	const css = useStyles();

	useEffect(() => {
		const calculateOrderPrice = () => {
			const allItems = cartItems.map(item => item.price_raw * item.quantity);
			let price = allItems.reduce((a, b) => a + b, 0);
			setOrderPrice(price);
		};

		calculateOrderPrice();
	}, [cartItems]);

	useEffect(() => {
		const calculateShippingPrice = () => {
			let price = 500;
			if (orderPrice >= 10000) {
				price = 0;
			}
			setShippingPrice(price);
		};

		calculateShippingPrice();
	}, [orderPrice]);

	return (
		<div className={css.root}>
			<div className={css.mt}>
				<List>
					<ListItem className={css.listItemPadding}>
						<ListItemText primary="Order" />
						<ListItemSecondaryAction>{orderPrice} SEK</ListItemSecondaryAction>
					</ListItem>
					<ListItem className={css.listItemPadding}>
						<ListItemText primary="Shipping" />
						<ListItemSecondaryAction>
							{shippingPrice} SEK
						</ListItemSecondaryAction>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem className={css.listItemPadding}>
						<ListItemText>
							<Typography variant="h6">Total Cost</Typography>
						</ListItemText>
						<ListItemSecondaryAction>
							{orderPrice + shippingPrice} SEK
						</ListItemSecondaryAction>
					</ListItem>
				</List>
			</div>
		</div>
	);
};

export default Subtotal;

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
	},
	grow: {
		flexGrow: 1,
	},
	listItemPadding: {
		paddingTop: 0,
		paddingBottom: 0,
	},
	mt: {
		marginTop: '4rem',
	},
}));
