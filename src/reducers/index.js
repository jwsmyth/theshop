import { combineReducers } from 'redux';
import cartReducer from './Cart';
import likeReducer from './Likes';
import productsReducer from './Products';

const reducers = combineReducers({
	cart: cartReducer,
	productList: productsReducer,
	likes: likeReducer,
});

export default reducers;
