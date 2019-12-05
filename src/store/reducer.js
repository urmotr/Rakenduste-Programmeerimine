import {ITEM_REMOVE, ITEM_ADD, ITEMS_SUCCESS, USER_UPDATE, TOKEN_UPDATE} from "./actions";
import PropTypes from "prop-types";

export const UserPropTypes = {
    email: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    cart: PropTypes.arrayOf(PropTypes.string).isRequired
};

const initialState = {
    token: null,
    user: null,
    items: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_UPDATE: {
            return {
                ...state,
                user: action.payload,
            };
        }
        case TOKEN_UPDATE: {
            return {
                ...state,
                token: action.payload,
            };
        }
        case ITEM_REMOVE: {
            return{
                ...state,
                user: removeItemByIndex(state.user, action.payload),
            };
        }
        case ITEMS_SUCCESS: {
            return{
                ...state,
                items: action.payload,
            };
        }
        case ITEM_ADD: {
            return {
                ...state,
                user: addItemToCart(state.user, action.payload)
            };
        }
        default:{
            return state;
        }
    }
};
const addItemToCart = (user, itemId) =>{
    return {
        ...user,
        cart: user.cart.concat([itemId])
    };
};
const removeItemByIndex = (user, itemId) => {
    const copy = user.cart.slice();
    const key = copy.findIndex(cart => cart === itemId);
    copy.splice(key,1);
    return {
        ...user,
        cart: copy
    };
};
