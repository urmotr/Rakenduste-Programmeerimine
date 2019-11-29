import {ITEM_REMOVE, ITEM_ADD, ITEMS_SUCCESS, USER_UPDATE, TOKEN_UPDATE} from "./actions";
import PropTypes from "prop-types";

export const UserPropTypes = {
    email: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
};

const initialState = {
    token: null,
    user: null,
    cart: [],
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
                cart: removeItemByKey(state.cart, action.payload),
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
                cart: state.cart.concat([action.payload])
            };
        }
        default:{
            return state;
        }
    }
};

const removeItemByKey = (cart, key) => {
    const copy = cart.slice();
    copy.splice(key,1);
    return copy;
};
