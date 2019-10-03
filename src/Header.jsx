import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={"header"}>
            <Link to={"/"}>
                <img src="logo.jpg" width="300" height="100" alt="TLU logo"/>
            </Link>
            <div className={"header-right"}>
                    <button className={"ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-shop"}>shop</button>
                    <button className={"ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-user"}>user</button>
            </div>
        </div>
    );
};

export default Header;