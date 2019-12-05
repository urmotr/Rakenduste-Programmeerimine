import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const{store, persistor} = configureStore();

const root = document.getElementById("app");
const authDefaultValue = {
        token: null,
        user:{
            email: null,
            _id: null,
            createdAt: null,
        }
};

export const AuthContext = React.createContext({authDefaultValue});

class App extends React.Component{
        state = authDefaultValue;
        render(){
                return(
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <BrowserRouter>
                                <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
                                <Route path={"/"} component={Header}/>
                                <div className="hero-image">
                                <Switch>
                                    <Route path="/" exact component={HomePage} />
                                    <Route path="/login" exact component={LoginPage}/>
                                    <Route path="/signup" exact component={SignupPage} />
                                    <Route path="/users/:id" exact component={UserPage}/>
                                    <Route path="/items/:itemId" exact component={ItemPage} />
                                    <Route path="/checkout/cart" exact component={CartPage} />
                                    <Route path="*" exact component={NotFoundPage}/>
                                </Switch>
                                </div>
                            </BrowserRouter>
                        </PersistGate>
                    </Provider>
                );
        }
}

ReactDOM.render(
    <App>

    </App>,
    root
);
