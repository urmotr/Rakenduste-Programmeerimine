import React from "react";
import {Link } from "react-router-dom";
import "./header.css";
import {userIcon, cartIcon} from "./icons.js";

const Header = () => {
    return (
        <div className={"header"}>
            <Link to={"/"}>
                <img src="/logo.jpg" width="300" height="100" alt="TLU logo"/>
            </Link>
            <div className={"header-right"}>
                    <img className={"icon"} src={userIcon}/>
                <div className={"icontext"}> <a href={"/login"}>Login/<br/>Register</a></div>
                    <img className={"icon"} src={cartIcon}/>
            </div>
        </div>
    );
};

export default Header;