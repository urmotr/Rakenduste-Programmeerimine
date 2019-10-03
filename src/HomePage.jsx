
import React from "react";
import {phones, tablets} from "./mydatabase";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: tablets,
        };
    }

    componentDidMount() {
        fetch("http://localhost:9000/api/items")
            .then(res => {
                console.log("res", res);
                return res.json();
            })
            .then(items => {
                console.log("items", items);
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    handleChange(event){
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
    }
    render(){
        return (
            <>
             <Header />
             <select onChange={this.handleChange.bind(this)}>
                    <option value = "tablet" > tablets</option>
                    <option value="phone">Phones</option>
                </select>
             <ItemList items={this.state.items} />
         </>
        );
    }
}

export default HomePage;