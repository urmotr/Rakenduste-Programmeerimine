import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const ItemList = (props) => {
    return (
        <div className={"items"}>
            {
                props.items.map( item => {
                return <Item
                    imgSrc={item.imgSrc}
                    price={item.price}
                    title={item.title}
                />
            })
            }
        </div>
    )
};

const Item = (props) => {
    return(
        <Link to={"/item"}>
        <div className={"tablets"}>
            <ItemName title={props.title}/>
            <img src={props.imgSrc} width={"144"} height={"222"}/>
            <div className={"iprice"}>{props.price}</div>
        </div>
        </Link>
    )
};

function ItemName(props){
    if(props.title.length > 15){
        return <div className={"ititle"}>{props.title.slice(0, 15)+"..."}</div>;
    }else{
        return <div className={"ititle"}>{props.title}</div>;
    }
}

export default ItemList;