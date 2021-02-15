import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';
import { AddShoppingCart, Favorite } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, LIKE_PRODUCT } from '../actions';

const LikedProduct = ({ product }) => {
	const css = useStyles();
	const dispatch = useDispatch();

	return (
		<main className={css.main}>
			<Card className={css.root}>
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
							<Favorite className={css.isLiked} />
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
		</main>
	);
};

export default LikedProduct;

const useStyles = makeStyles(theme => ({
	main: {
		paddingTop: theme.spacing(3),
	},
	cardMedia: {
		height: '10rem',
	},
	pic: {
		objectFit: 'cover',
		height: '100%',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
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
