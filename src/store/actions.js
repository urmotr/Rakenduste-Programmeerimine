import * as services from "../services";
import * as selectors from "../store/selectors";
import {toast} from "react-toastify";

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
export const userUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user
});
export const tokenUpdate = (token) => ({
    type: TOKEN_UPDATE,
    payload: token
});

export const removeItem = (itemId) => (dispatch, getState) => {
    const store = getState();
    const token = selectors.getToken(store);
    const userId = selectors.getUser(store)._id;
    services.removeItemFromCart({itemId, token, userId})
        .then(() => {
            dispatch({
                type: ITEM_REMOVE,
                payload: itemId
            });
            console.log(selectors.getCart(store));
            toast.success("Toode edukalt eemaldatud!");
        })
        .catch( err => {
            console.log(err);
            toast.error("Toote eemaldamisel tekkis viga!");
        });
};

export const addItem = (item) => (dispatch, getState) => {
    const store = getState();
    const itemId = item._id;
    const token = selectors.getToken(store);
    const userId = selectors.getUser(store)._id;
    services.addItemToCart({itemId, token, userId})
        .then(() => {
            dispatch({
                type: ITEM_ADD,
                payload: itemId
            });
            console.log(selectors.getCart(store));
            toast.success("Toode edukalt lisatud!");
        })
        .catch( err => {
            console.log(err);
            toast.error("Toote lisamisel tekkis viga!");
        });
};

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