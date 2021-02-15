import { Grid } from '@material-ui/core';
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';

const ProductList = ({ products }) => {
	const css = useStyles();
	return (
		<main className={css.content}>
			<Grid container justify="center" spacing={2}>
				{products.map(product => (
					<Grid
						item
						key={product._id}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						className={css.maxSize}
					>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default ProductList;

const useStyles = makeStyles(theme => ({
	content: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		flexGrow: 1,
	},
	maxSize: {
		maxWidth: 220,
	},
}));
