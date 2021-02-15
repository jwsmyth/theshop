import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Likes from './components/Likes';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, makeStyles } from '@material-ui/core';
import { PRODUCT_LIST } from './actions';
import { SpinnerUtil, ErrorUtil } from './utils';
import CheckedOut from './components/CheckedOut';

const App = () => {
	const productList = useSelector(state => state.productList);
	const { loading, error, products } = productList;
	const dispatch = useDispatch();
	const css = useStyles();

	useEffect(() => {
		dispatch(PRODUCT_LIST());
	}, [dispatch]);

	return (
		<div className={css.background}>
			<Router>
				<Container>
					<Navbar />
					<div className={css.navMargin} />
					<Switch>
						<Route exact path="/">
							{loading ? (
								<SpinnerUtil />
							) : error ? (
								<ErrorUtil />
							) : (
								<Home products={products} />
							)}
						</Route>
						<Route path="/cart" component={Cart} />

						<Route path="/likes">{loading ? <SpinnerUtil /> : <Likes />}</Route>
						<Route path="/checkedout" component={CheckedOut} />
					</Switch>
				</Container>
			</Router>
		</div>
	);
};

export default App;

// Set margin for navbar
const useStyles = makeStyles(theme => ({
	navMargin: theme.mixins.toolbar,
	background: {
		backgroundColor: theme.palette.background.secondary,
	},
}));
