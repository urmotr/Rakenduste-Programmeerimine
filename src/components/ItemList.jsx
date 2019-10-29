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
            <img className={"images"} src={props.imgSrc}/>
            <div className={"ititle"}>{props.title}</div>
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


export default ItemList;