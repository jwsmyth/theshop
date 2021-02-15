import * as actions from '../actionTypes';

const likeReducer = (state = { likedProducts: [] }, action) => {
	switch (action.type) {
		case actions.LIKE_PRODUCT:
			const item = action.payload;
			const isItemLiked = state.likedProducts.find(x => x._id === item._id);

			if (isItemLiked) {
				return {
					...state,
					likedProducts: state.likedProducts.filter(x => x._id !== item._id),
				};
			} else {
				return {
					...state,
					likedProducts: [...state.likedProducts, item],
				};
			}

		case actions.DISLIKE_PRODUCT:
			return {
				...state,
				likedProducts: state.likedProducts.filter(
					x => x._id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default likeReducer;
