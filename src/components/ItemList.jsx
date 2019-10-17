import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const ItemList = (props) => {
    return (
        <div className={"items"}>
            {
                props.items.map( item => {
                return <Item
                    key={item._id}
                    id={item._id}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    title={item.title}
                />;
            })
            }
        </div>
    );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

const Item = (props) => {
    return(
        <Link to={`/items/${props.id}`}>
        <div className={"tablets"}>
            <ItemName title={props.title}/>
            <img src={props.imgSrc} width={"144"} height={"222"}/>
            <div className={"iprice"}>{props.price}</div>
        </div>
        </Link>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

function ItemName(props){
    if(props.title.length > 15){
        return <div className={"ititle"}>{props.title.slice(0, 15)+"..."}</div>;
    }else{
        return <div className={"ititle"}>{props.title}</div>;
    }
}

export default ItemList;