import React from "react";
import {phones, tablets} from "./mydatabase";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: tablets,
        }
    }
    handleChange(event){
        console.log(event.target.value);
        switch(event.target.value){
            case "phone": {
                this.setState({
                    items: phones,
                });
                break;
            }
            case "tablet":{
                this.setState({
                    items: tablets,
                });
                break;

            }
        }
    };
    render(){
        return (
            <>
                <Header/>
                <select onChange={this.handleChange.bind(this)}>
                    <option value = "tablet" > Tablets </option>
                    <option value="phone">Phones</option>
                </select>
                <ItemList items={this.state.items}/>
            </>
        )
    }
}

export default HomePage;