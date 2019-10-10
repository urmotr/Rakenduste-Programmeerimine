
import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            selectedCategory: "tablet",
        };
    }

    componentDidMount() {
        fetch("/api/items")
            .then(res => {
                console.log("res", res);
                return res.json();
            })
            .then(items => {
                this.setState({
                    items: items,
                });
                this.state.items=items;
                console.log(this.state.items);
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    handleDropdown(event){
        console.log(event.target.value);
        this.setState({
            selectedCategory: event.target.value
        })
    }

    getVisibleItems = () => {
      return this.state.items.filter(item => item.category === this.state.selectedCategory);
    };

    render(){
        console.log("this.state: ", this.state);
        console.log(this.getVisibleItems());
        return (
            <>
             <Header />
             <Checkbox name={"phones"} onChange={this.handleDropdown} checked={true}/>
             <ItemList items={this.getVisibleItems()} />
         </>
        );
    }
}

export default HomePage;