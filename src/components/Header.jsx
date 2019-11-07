import React from "react";
import {Link } from "react-router-dom";
import "./header.css";
import {userIcon, cartIcon} from "./icons.js";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";

const Header = (props) => {
    return (
                <div className={"header"}>
                    <Link to={"/"}>
                        <img src="/logo.jpg" width="300" height="100" alt="TLU logo"/>
                    </Link>
                    <div className={"header-right"}>
                        {props.user.email && <WelcomeIcon user={props.user}/>}

                        {!props.user.email && <LoginRegisterIcon/>}
                        <Link to={"/checkout/cart"}>
                            <img className={"icon"} src={cartIcon}/>
                        </Link>
                    </div>
                </div>
    );
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
};
WelcomeIcon.propTypes={
    user: PropTypes.object,
};

export default authConsumer(Header);