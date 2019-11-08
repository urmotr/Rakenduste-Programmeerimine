import React from "react";
import "../components/shoppingcart.css";
import {getItem} from "../components/Items.jsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


class cartPage extends React.PureComponent {
        state = {
            items: [],
        };
    componentDidMount(){
        getItem()
            .then(items => {
                this.setState({items: items.slice(52,56)});
                console.log(this.state.items);
                return items;
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    render() {
        return (
            <>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Cart
                </div>
                <Item items={this.state.items}/>
            </div>
             <div className="pricecont">
                 Summa: {this.state.items.reduce( (a,b) => a+b.price,0 )}
                 <div className="button-container">
                     <button value={"Submit"}><span> <FontAwesomeIcon icon={faShoppingCart}/> Checkout</span></button>
                 </div>

             </div>
            </>
        );
    }
}

const Item = ({items}) => {
    return(
        <>
        {items.map ( (item) =>
                <div className="cart" key={item._id}>
                    <div className="imageDiv">
                        <img className="image" src={item.imgSrc} alt=""/>
                    </div>
                    <div className="description">
                        <span>{item.title}</span>
                    </div>
                    <div className="total-price">{item.price} € </div>
                    <div className="buttons">
                        <FontAwesomeIcon className="delete-btn" icon={faTrashAlt}/>
                    </div>
                </div>
            )}
        </>
    );
};

Item.propTypes={
    items: PropTypes.array,
};

export default cartPage;