import * as actions from '../actionTypes';
import { commerce } from '../commerce/commerce';

export const ADD_TO_CART = (product, qty = 1) => {
	return {
		type: actions.ADD_TO_CART,
		payload: {
			_id: product._id,
			name: product.name,
			image: product.image,
			price_raw: product.price_raw,
			price_formatted: product.price_formatted,
			quantity: qty,
		},
	};
};

export const REMOVE_FROM_CART = productId => {
	return {
		type: actions.REMOVE_FROM_CART,
		payload: productId,
	};
};

export const REMOVE_ONE_QUANTITY = (productId, qty) => {
	return {
		type: actions.REMOVE_ONE_QUANTITY,
		payload: {
			_id: productId,
			quantity: qty,
		},
	};
};

export const ADD_ONE_QUANTITY = (productId, qty) => {
	return {
		type: actions.ADD_ONE_QUANTITY,
		payload: {
			_id: productId,
			quantity: qty,
		},
	};
};

export const LIKE_PRODUCT = product => {
	return {
		type: actions.LIKE_PRODUCT,
		payload: product,
	};
};

export const DISLIKE_PRODUCT = productId => {
	return {
		type: actions.DISLIKE_PRODUCT,
		payload: productId,
	};
};

export const PRODUCT_LIST = () => async dispatch => {
	dispatch({
		type: actions.PRODUCT_LIST_REQUEST,
	});
	try {
		const { data } = await commerce.products.list();
		dispatch({
			type: actions.PRODUCT_LIST_SUCCESS,
			payload: data.map(item => ({
				_id: item.id,
				name: item.name,
				image: item.media.source,
				price_raw: item.price.raw,
				price_formatted: item.price.formatted_with_code,
				quantity: item.qty,
			})),
		});
	} catch (error) {
		dispatch({ type: actions.PRODUCT_LIST_FAILURE, payload: error.message });
	}
};

export const CHECKOUT = () => {
	return { type: actions.CHECKOUT };
};
