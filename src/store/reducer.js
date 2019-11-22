const ITEMS_SUCCESS = "ITEM_LOADED";
const ITEMS_REQUEST = "ITEM_REQUEST";
const ITEMS_FAILURE = "ITEM_FAILURE";

export const itemsSuccess = (items) => ({
    type: ITEMS_SUCCESS,
    payload: items
});
export const itemsRequest = () => ({
    type: ITEMS_REQUEST,
});
export const itemsFailure = () => ({
    type: ITEMS_FAILURE,
});

const ITEM_ADD = "ITEM_ADD";

export const addItem = (item) => ({
    type: ITEM_ADD,
    payload: item
});

export const removeItem = (index) => ({
    type: ITEM_REMOVE,
    payload: index
});

export const getItems = () => (dispatch, getState)=>{

    if(getState().items.length > 0) return null;

    dispatch(itemsRequest());
    return fetch("/api/v1/items")
        .then(res => {
            return res.json();
        })
        .then(items => {
            dispatch(itemsSuccess(items));
        })
        .catch(err=> {
            console.log(err);
        });
};

const ITEM_REMOVE = "ITEM_REMOVE";

const authReducer = (state, action) => {
    switch (action.type) {
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

export default authReducer;