import React from "react";
import {Link } from "react-router-dom";
import "./style/header.css";
import {userIcon, cartIcon} from "./icons.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";
import {UserPropTypes} from "../store/reducer";

const Header = ({cart, user}) => {
    console.log(user);
    return (
                <div className={"header"}>
                    <Link to={"/"}>
                        <img src="/static/images/logo.jpg" width="300" height="100" alt="TLU logo"/>
                    </Link>
                    <div className={"header-right"}>
                        {user && <WelcomeIcon user={user}/>}

                        {!user && <LoginRegisterIcon/>}
                        <Link to={"/checkout/cart"}>
                            <img className={"icon"} src={cartIcon}/>
                            <Badge>{cart.length}</Badge>
                        </Link>
                    </div>
                </div>
    );
};

const Badge = ({children}) => {
    if(children===0) return null;
    return(<span className={"badge"}>
        {children}
    </span>);
};

const LoginRegisterIcon = () => (
    <>
    <Link to={"../login"}>
        <img className={"icon"} src={userIcon}/>
        <div className={"icontext"}> Login/<br/>Register</div>
    </Link>
     </>
);

const WelcomeIcon = (props) => (
    <>
        <Link  to={`../users/${props.user._id}`} activeClassName="active">
            <img className={"icon"} src={userIcon}/>
            <div className={"icontext"}>Welcome {props.user.email}</div>
        </Link>
     </>
);

Header.propTypes={
    token: PropTypes.string,
    user: PropTypes.shape(UserPropTypes),
    cart: PropTypes.arrayOf(ItemProps).isRequired
};
WelcomeIcon.propTypes={
    user: PropTypes.shape(UserPropTypes),
};

Badge.propTypes={
    children: PropTypes.number
};

const mapStateToProps = (store) => {
  return {
      cart: store.cart,
      user: store.user,
  };
};

export default connect(mapStateToProps)(Header);