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
import store from "./store/store.js";
import CartPage from "./pages/CartPage.jsx";
import { Provider } from "react-redux";

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

        handleLogin = (token, user) => {
                this.setState({
                        user, token
                });
        };

        render(){
                return(
                    <Provider store={store}>
                    <AuthContext.Provider value={this.state}>
                    <BrowserRouter>
                        <Route path={"/"} component={Header}
                        />
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route
                                path="/login"
                                exact
                                render={(props) => <LoginPage {...props} onLogin={this.handleLogin}/>}
                            />
                            <Route path="/signup" exact component={SignupPage} />
                            <Route path="/users/:id" exact component={UserPage}/>
                            <Route path="/items/:itemId" exact component={ItemPage} />
                            <Route path="/checkout/cart" exact component={CartPage} />
                            <Route path="*" exact component={NotFoundPage}/>
                        </Switch>
                    </BrowserRouter>
                    </AuthContext.Provider>
                    </Provider>
                );
        }
}

ReactDOM.render(

    <App/>,
    root
);
