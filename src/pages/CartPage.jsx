import React from "react";
import "../components/shoppingcart.css";
/*import {getItem} from "../components/Items.jsx";
import PropTypes from "prop-types";*/


class cartPage extends React.PureComponent {
   /* state={
        items: {
            image: "www.ee",
        },
    };
    componentDidMount(){
        getItem()
            .then(items => {
                this.setState({
                    items: items,
                });
                this.setState({items: items});
                console.log(this.state);
            })
            .catch(err => {
                console.log("err", err);
            });
    }
    getRandomItem=()=>{
        console.log(this.state.items);
        return this.state.items;
    };*/
    render() {
        return (
            <div className="shopping-cart">
                <div className="title">
                    Shopping Cart
                </div>

            </div>
        );
    }
}

/*const ShopItem = (props) => {
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
);};*/
/*
const Item = (props) => {
    return(
    <div className="item">
        <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
        </div>
        <div className="image">
            <img src={props.imgSrc} alt=""/>
        </div>

        <div className="description">
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
        </div>

        <div className="quantity">
            <button className="plus-btn" type="button" name="button">
                <img src="plus.svg" alt=""/>
            </button>
            <input type="text" name="name" value="1"/>
            <button className="minus-btn" type="button" name="button">
                <img src="minus.svg" alt=""/>
            </button>
        </div>
        <div className="total-price">$549</div>
    </div>
    );
};


ShopItem.propTypes={
    items: PropTypes.object,
};

Item.propTypes={
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
};*/

export default cartPage;