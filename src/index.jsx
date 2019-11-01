import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const root = document.getElementById("app");

class App extends React.Component{
        state={
                token: null,
                user:{
                        email: null,
                        _id: null,
                        createdAt: null,
                }
        };

        handleLogin = (token, user) => {
                this.setState({
                        user, token
                });
        };

        render(){
                console.log(this.state.user);
                return(
                    <BrowserRouter>
                            <Route
                                path={"/"}
                                render={(props) => <Header
                                        {...props}
                                        token={this.state.token}
                                        user={this.state.user}
                                />}
                             />
                            <Route path="/" exact component={HomePage} />
                            <Route
                                path="/login"
                                exact
                                render={(props) => <LoginPage {...props} onLogin={this.handleLogin}/>}
                            />
                            <Route path="/signup" exact component={SignupPage} />
                            <Route
                                path="/users/:id"
                                exact
                                render={(props) => <UserPage {...props} user={this.state.user}/>}
                            />
                            <Route path="/items/:itemId" exact component={ItemPage} />
                            <Route path="*" exact component={NotFoundPage}/>
                    </BrowserRouter>
                );
        }
}

ReactDOM.render(

    <App/>,
    root
);
