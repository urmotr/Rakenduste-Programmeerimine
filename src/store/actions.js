import * as services from "../services";
import * as selectors from "../store/selectors";
export const ITEMS_SUCCESS = "ITEM_LOADED";
export const ITEMS_REQUEST = "ITEM_REQUEST";
export const ITEMS_FAILURE = "ITEM_FAILURE";

export const ITEM_REMOVE = "ITEM_REMOVE";
export const ITEM_ADD = "ITEM_ADD";
export const USER_UPDATE = "USER_UPDATE";
export const TOKEN_UPDATE = "TOKEN_UPDATE";

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

export const addItem = (item) => ({
    type: ITEM_ADD,
    payload: item
});

export const removeItem = (index) => ({
    type: ITEM_REMOVE,
    payload: index
});
export const userUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user
});
export const tokenUpdate = (token) => ({
    type: TOKEN_UPDATE,
    payload: token
});

export const getItems = () => (dispatch, getState)=>{
    const store =getState();
    if(selectors.getItems(store).length > 0) return null;

    dispatch(itemsRequest());
    return services.getItems()
        .then(items => {
            dispatch(itemsSuccess(items));
        })
        .catch(err=> {
            console.log(err);
        });
};