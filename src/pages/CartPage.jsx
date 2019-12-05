import React from "react";
import "../components/style/shoppingcart.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Fancybutton from "../components/Fancybutton.jsx";
import {connect} from "react-redux";
import {removeItem} from "../store/actions";
import * as selectors from "../store/selectors";
import * as services from "../services.js";


class cartPage extends React.PureComponent {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
        dispatch: PropTypes.func.isRequired,
    };
    trashItem=(itemId)=>{
        this.props.dispatch(removeItem(itemId));
    };
    state = {
        cartItems: []
    };
    componentDidMount() {
        const promises = this.props.cart.map(itemId => services.getItem({itemId}));
        Promise.all(promises).then(items => {
            this.setState({
                cartItems: items,
            });
        })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps) {
        const prevPropsIds = prevProps.cart.join("");
        const currentIds = this.state.cartItems.join("");
        if(prevPropsIds !== currentIds){
            this.componentDidMount();
        }
    }

    render() {
        return (
            <>
            <div className="shopping-cart">
                <div className="stitle">
                    Shopping Cart
                </div>
                <Item trashItem={this.trashItem} items={this.state.cartItems}/>
            </div>
             <div className="pricecont">
                 <span className={"pricetag"}>Vahesumma</span><span className={"pricer"}>{Math.round(this.state.cartItems.reduce( (a,b) => a+b.price,0)*100)/100} €</span><br></br>
                 <span className={"pricetag"}>Käibemaks</span><span className={"pricer"}>{Math.round(this.state.cartItems.reduce( (a,b) => a+b.price,0)*0.2*100)/100} €</span><br></br>
                 <span className={"pricetag"}>Kokku</span><span className={"pricer"}>{Math.round(this.state.cartItems.reduce( (a,b) => a+b.price,0)*100+this.state.cartItems.reduce( (a,b) => a+b.price,0 )*0.2*100)/100} €</span><br></br>
                 <Fancybutton onClick={() => console.log("Vormista ost")} value={"Checkout"}/>
             </div>
            </>
        );
    }
}

const Item = ({items, trashItem}) => {
    return(
        <>
        {items.map ( (item, index) =>
                <div className="cart" key={index}>
                    <div className="imageDiv">
                        <img className="simage" src={item.imgSrc} alt=""/>
                    </div>
                    <div className="description">
                        <span>{item.title}</span>
                    </div>
                    <div className="total-price">{item.price} € </div>
                    <div className="buttons">
                        <FontAwesomeIcon title={"eemalda"} onClick={() => trashItem(item._id)} className="delete-btn" icon={faTrashAlt}/>
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
    trashItem: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
  return {
      cart: selectors.getCart(store)
  };
};

export default connect(mapStateToProps)(cartPage);