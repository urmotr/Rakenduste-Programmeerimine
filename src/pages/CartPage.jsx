import React from "react";
import "../components/shoppingcart.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Fancybutton from "../components/Fancybutton.jsx";
import {connect} from "react-redux";


class cartPage extends React.PureComponent {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
    };
    render() {
        return (
            <>
            <div className="shopping-cart">
                <div className="stitle">
                    Shopping Cart
                </div>
                <Item items={this.props.cart}/>
            </div>
             <div className="pricecont">
                 <span className={"pricetag"}>Vahesumma</span><span className={"pricer"}>{Math.round(this.props.cart.reduce( (a,b) => a+b.price,0)*100)/100} €</span><br></br>
                 <span className={"pricetag"}>Käibemaks</span><span className={"pricer"}>{Math.round(this.props.cart.reduce( (a,b) => a+b.price,0)*0.2*100)/100} €</span><br></br>
                 <span className={"pricetag"}>Kokku</span><span className={"pricer"}>{Math.round(this.props.cart.reduce( (a,b) => a+b.price,0)*100+this.props.cart.reduce( (a,b) => a+b.price,0 )*0.2*100)/100} €</span><br></br>
                 <Fancybutton value={"Checkout"}/>
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
                        <img className="simage" src={item.imgSrc} alt=""/>
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

export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

Item.propTypes={
    items: PropTypes.array.isRequired,
};

const mapStateToProps = (store) => {
  return {
      cart: store.cart
  };
};

export default connect(mapStateToProps)(cartPage);