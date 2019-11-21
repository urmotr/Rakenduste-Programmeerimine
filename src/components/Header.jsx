import React from "react";
import {Link } from "react-router-dom";
import "./header.css";
import {userIcon, cartIcon} from "./icons.js";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";

const Header = ({cart, user}) => {
    console.log(cart);
    return (
                <div className={"header"}>
                    <Link to={"/"}>
                        <img src="/static/images/logo.jpg" width="300" height="100" alt="TLU logo"/>
                    </Link>
                    <div className={"header-right"}>
                        {user.email && <WelcomeIcon user={user}/>}

                        {!user.email && <LoginRegisterIcon/>}
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
        <img className={"icon"} src={userIcon}/>
        <div className={"icontext"}>
            <Link to={`../users/${props.user._id}`} activeClassName="active">Welcome {props.user.email}</Link></div>
     </>
);

Header.propTypes={
    token: PropTypes.string,
    user: PropTypes.object,
    cart: PropTypes.arrayOf(ItemProps).isRequired
};
WelcomeIcon.propTypes={
    user: PropTypes.object,
};

Badge.propTypes={
    children: PropTypes.number
};

const mapStateToProps = (store) => {
  return {
      cart: store.cart,
  };
};

export default connect(mapStateToProps)(authConsumer(Header));