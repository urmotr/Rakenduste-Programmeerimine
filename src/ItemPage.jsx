import React from "react";
import Header from "./Header.jsx";
import PropTypes from "prop-types";

class ItemPage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.fetchItem();
    }

    fetchItem = () => {
        fetch(`/api/items/${this.props.match.params.itemId}`)
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
    render(){
        return (
            <>
           <Header/>
           <div className={"tablets"}>
                    <div className={"ititle"}>{this.state.title}</div>
                    <img src={this.state.imgSrc} width={"144"} height={"222"}/>
                    <div className={"iprice"}>{this.state.price}</div>
                </div>
       </>
        );
    }
}

ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
};

export default ItemPage;