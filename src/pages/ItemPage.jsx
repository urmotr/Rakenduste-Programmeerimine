import React from "react";
import PropTypes from "prop-types";
import "../components/itempage.css";
import Description from "../components/Description.jsx";
import Fancybutton from "../components/Fancybutton.jsx";
import {connect} from "react-redux";
import {addItem} from "../store/reducer";

class ItemPage extends React.PureComponent{
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem = () => {
        fetch(`/api/v1/items/${this.props.match.params.itemId}`)
            .then(res => {
                return res.json();
            })
            .then(item => {
                this.setState({
                    ...item
                });
            })
            .catch(err => {
                console.log("item page", err);
            });
    };

    handleBuy = () => {
      this.props.dispatch(addItem(this.state));
    };

    render(){
        return (
            <div className={"cover"}>
           <div className={"item"}>
                    <img className={"image"} src={this.state.imgSrc}/>
                    <div className={"title"}>{this.state.title}</div>
                    <Description />
                    <div className={"price"}>{this.state.price} €</div>
               <Fancybutton onClick={this.handleBuy} value={"Buy"}/>
                </div>
       </div>
        );
    }
}

ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default connect()(ItemPage);