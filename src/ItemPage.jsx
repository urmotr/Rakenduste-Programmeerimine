import React from "react";
import {phones, tablets} from "./mydatabase";
import Header from "./Header.jsx";

class ItemPage extends React.PureComponent{
    render(){
        const item = phones[0];
        return (
            <>
                <Header/>
                <div className={"tablets"}>
                    <div className={"ititle"}>{item.title}</div>
                    <img src={item.imgSrc} width={"144"} height={"222"}/>
                    <div className={"iprice"}>{item.price}</div>
                </div>
            </>
        )
    }
}

export default ItemPage;