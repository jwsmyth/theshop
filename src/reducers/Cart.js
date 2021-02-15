import * as actions from '../actionTypes';

const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case actions.ADD_TO_CART:
			const item = action.payload;
			const itemInCart = state.cartItems.find(x => x._id === item._id);

			if (itemInCart) {
				return {
					...state,
					cartItems: state.cartItems.map(x =>
						x._id === itemInCart._id ? { ...x, quantity: x.quantity + 1 } : x
					),
				};
			} else {
				return { ...state, cartItems: [...state.cartItems, item] };
			}

		case actions.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(x => x._id !== action.payload),
			};

		case actions.REMOVE_ONE_QUANTITY:
			if (action.payload.quantity === 1) return state;
			return {
				...state,
				cartItems: state.cartItems.map(x =>
					x._id === action.payload._id ? { ...x, quantity: x.quantity - 1 } : x
				),
			};

		case actions.ADD_ONE_QUANTITY:
			return {
				...state,
				cartItems: state.cartItems.map(x =>
					x._id === action.payload._id ? { ...x, quantity: x.quantity + 1 } : x
				),
			};

		case actions.CHECKOUT:
			return {
				...state,
				cartItems: [],
			};

		default:
			return state;
	}
};

export default cartReducer;
