import * as actions from '../actionTypes';

const productsReducer = (state = { loading: true, products: [] }, action) => {
	switch (action.type) {
		case actions.PRODUCT_LIST_REQUEST:
			return { loading: true };
		case actions.PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case actions.PRODUCT_LIST_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export default productsReducer;
