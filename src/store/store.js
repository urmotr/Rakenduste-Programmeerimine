import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
let persistor = persistStore(store);

export default {store, persistor};