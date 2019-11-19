import {createStore} from "redux";

// const USER_SUCCESS = "USER_LOADED";
// const USER_REQUEST = "USER_REQUEST";
// const USER_FAILURE = "USER_FAILURE";

const ITEM_ADD = "ITEM_ADD";

export const addItem = (item) => ({
    type: ITEM_ADD,
    payload: item
});
// const ITEM_REMOVE = "ITEM_REMOVE";

const initialState = {
    user:{
        email: null,
        _id: null,
        token: null
    },
    cart: [],
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
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

const store = createStore(authReducer);
store.subscribe(() => console.log(store.getState()));


export default store;