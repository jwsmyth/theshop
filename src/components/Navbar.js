import {
	Toolbar,
	AppBar,
	Badge,
	IconButton,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FavoriteBorder, ShoppingCart, Home } from '@material-ui/icons';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
	const css = useStyles();
	const { cartItems } = useSelector(state => state.cart);
	const [totalCartItems, setTotalCartItems] = useState(null);
	const { likedProducts } = useSelector(state => state.likes);

	useEffect(() => {
		let accumulator = 0;
		cartItems.map(x => (accumulator += x.quantity));
		setTotalCartItems(accumulator);
	}, [cartItems]);

	return (
		<>
			<AppBar className={css.appBar} position="fixed" color="inherit">
				<Toolbar>
					<Link to="/" className={css.title}>
						<Typography variant="h5">The Shop</Typography>
					</Link>
					<div className={css.grow} />
					<Link to="/">
						<IconButton>
							<Home className={css.iconBlack} />
						</IconButton>
					</Link>
					<Link to="/likes">
						<IconButton>
							<Badge badgeContent={likedProducts.length} color="secondary">
								<FavoriteBorder className={css.iconBlack} />
							</Badge>
						</IconButton>
					</Link>
					<Link to="/cart">
						<IconButton>
							<Badge badgeContent={totalCartItems} color="primary">
								<ShoppingCart className={css.iconBlack} />
							</Badge>
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;

const useStyles = makeStyles(() => ({
	grow: {
		flexGrow: 1,
	},
	iconBlack: {
		color: 'black',
	},
	title: {
		color: 'inherit',
		textDecoration: 'inherit',
	},
}));
