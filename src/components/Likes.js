import { Button, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import LikedProduct from './LikedProduct';
import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Likes = () => {
	const { likedProducts } = useSelector(state => state.likes);
	const [isEmpty, setIsEmpty] = useState(false);
	const css = useStyles();

	useEffect(() => {
		if (likedProducts.length === 0) {
			setIsEmpty(true);
		}
	}, [likedProducts]);

	return (
		<main className={css.content}>
			<Grid container justify="center" spacing={2}>
				{!isEmpty ? (
					likedProducts.map(product => (
						<Grid
							item
							key={product._id}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className={css.maxSize}
						>
							<LikedProduct product={product} />
						</Grid>
					))
				) : (
					<div className={css.emptyCart}>
						<Typography variant="h5">You have nothing liked!</Typography>
						<Link to="/">
							<Button variant="outlined" className={css.mt}>
								Back to shop
							</Button>
						</Link>
					</div>
				)}
			</Grid>
		</main>
	);
};

export default Likes;

const useStyles = makeStyles(theme => ({
	content: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		flexGrow: 1,
	},
	maxSize: {
		maxWidth: 251,
	},
	emptyCart: {
		textAlign: 'center',
	},
	mt: {
		marginTop: '2rem',
	},
}));
