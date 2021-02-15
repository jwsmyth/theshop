import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';
import { AddShoppingCart, FavoriteBorder, Favorite } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, LIKE_PRODUCT } from '../actions';
import { useEffect, useState } from 'react';

const Product = ({ product }) => {
	const liked = useSelector(state => state.likes.likedProducts);
	const [isLiked, setIsLiked] = useState(false);
	const css = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLiked(liked.some(x => x._id === product._id));
	}, [liked, product._id]);

	return (
		<Card className={css.root} elevation={1}>
			<CardMedia className={css.cardMedia}>
				<img
					className={css.pic}
					src={product.image}
					title={product.name}
					alt={product.name}
				/>
			</CardMedia>
			<div className={css.cardBackground}>
				<CardContent>
					<div className={css.cardContent}>
						<Typography variant="subtitle2" gutterBottom>
							{product.name}
						</Typography>
						<Typography variant="body2" gutterBottom>
							{product.price_formatted}
						</Typography>
					</div>
				</CardContent>
				<CardActions className={css.cardActions} disableSpacing>
					<IconButton
						aria-label="Like"
						onClick={() => dispatch(LIKE_PRODUCT(product))}
					>
						{isLiked ? (
							<Favorite className={css.isLiked} />
						) : (
							<FavoriteBorder />
						)}
					</IconButton>
					<IconButton
						aria-label="Add to cart"
						onClick={() => dispatch(ADD_TO_CART(product, 1))}
					>
						<AddShoppingCart />
					</IconButton>
				</CardActions>
			</div>
		</Card>
	);
};

export default Product;

const useStyles = makeStyles(theme => ({
	root: {
		// maxWidth: '100%',
	},
	cardMedia: {
		height: '10rem',
	},
	pic: {
		objectFit: 'cover',
		height: '80%',
		display: 'block',
		margin: 'auto',
		paddingTop: '1rem',
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardContent: {},
	isLiked: {
		color: 'red',
	},
	cardBackground: {
		backgroundColor: theme.palette.background.default,
	},
}));
