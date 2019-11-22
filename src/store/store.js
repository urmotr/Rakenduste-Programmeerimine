import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


const persistConfig = {
    key: "root",
    storage,
};


const initialState = {
    user:{
        email: null,
        _id: null,
        token: null
    },
    cart: [],
    items: [],
};
const persistedReducer = persistReducer(persistConfig, authReducer(initialState));

const store = createStore(persistedReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
let persistor = persistStore(store);

export default {store, persistor};