
const intialState = {
    prod: [],
    Cart: [],
    total: 0,
}

const listingReducer = (state = intialState, action) => {
    switch (action.type) {
        case "load":
            return {
                ...state,
                prod: action.prod,
            };

        case "add_in_cart":
            return {
                ...state,
                Cart: [...state.Cart, action.prod],
                total: state.total + action.prod.price,
            };

        case "remove_cart":
            const indexToRemove = state.Cart.findIndex(item => item.id === action.prod.id);
            if (indexToRemove !== -1) {
                const removedItem = state.Cart[indexToRemove];
                return {
                    ...state,
                    Cart: state.Cart.filter(item => item.id !== action.prod.id),
                    total: state.total - removedItem.price,
                };
            }
            return state;

        default:
            return state;
    }
}

export default listingReducer;