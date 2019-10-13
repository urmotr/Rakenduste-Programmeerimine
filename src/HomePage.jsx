
import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";
import "./homepage.css";
import Dropdown from "./Dropdown.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            selectedCategory: "tablets",
            allCategories: ["phones", "tablets"],
            selectedCategories: ["tablets"],
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
                this.setState({items: items});
                console.log(this.state.items);
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    handleDropdown = (event) =>{
        if(this.isSelected(event.target.name)){
            const clone = this.state.selectedCategories.slice();
            const index = this.state.selectedCategories.indexOf(event.target.name);
            clone.splice(index, 1);
            this.setState({
                selectedCategories: clone
            });
        }else{
            this.setState({
                selectedCategories: this.state.selectedCategories.concat([event.target.name])
            });
        }
    };

    getVisibleItems = () => {
      return this.state.items.filter(item => item.category === this.state.selectedCategories[0] || item.category === this.state.selectedCategories[1] || item.category === this.state.selectedCategories[2]);
    };

    isSelected = (name) => this.state.selectedCategories.indexOf(name) >=0;

    render(){
        return (
            <>
             <Header />
                <div className={"checkboxlist"}>
                {this.state.allCategories.map(name => {
                    return(
                        <Checkbox key={name} name={name} onChange={this.handleDropdown} checked={this.isSelected(name)}/>
                    );
                })}
                </div>
                <Dropdown/>
             <ItemList items={this.getVisibleItems()} />
         </>
        );
    }
}

export default HomePage;