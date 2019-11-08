import React from "react";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import SortDropdown from "../components/SortDropdown.jsx";
import {getItem} from "../components/Items.jsx";

class HomePage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            sortDirection: -1,
            items: [],
            allCategories: ["phones", "tablets"],
            selectedCategories: ["tablets"],
            sortMethod: "Price high to low",
        };
    }

    componentDidMount() {
            getItem()
            .then(items => {
                this.setState({
                    items: items,
                });
                this.setState({items: items});
            })
            .catch(err => {
                console.log("err", err);
            });
    }

    handleFilterSelect = (event) =>{
        const categoryName = event.target.name;
        if(this.isSelected(categoryName)) return this.unselectCategory(categoryName);
        this.selectCategory(categoryName);
    };

    unselectCategory = (categoryName) => {
        const newArr = this.state.selectedCategories.filter(cn => cn !== categoryName);
        this.setState({
            selectedCategories: newArr
        });
    };

    selectCategory = (categoryName) => {
        this.setState({
            selectedCategories: this.state.selectedCategories.concat([categoryName])
        });
    };

    getVisibleItems = () => {
      return this.state.items.filter(item => item.category === this.state.selectedCategories[0] || item.category === this.state.selectedCategories[1] || item.category === this.state.selectedCategories[2])
          .sort((a,b) => {
              switch (this.state.sortDirection){
                  case -1: return b.price - a.price;
                  case 1: return a.price - b.price;
              }
          });
    };

    isSelected = (name) => this.state.selectedCategories.indexOf(name) >=0;

    handleSortDropdown = (event) => {
        if(event.target.value != 0) {
            this.setState({
                sortDirection: parseInt(event.target.value),
                sortMethod: event.target.alt
            });
        }
    };

    render(){
        return (
            <>
                <div className={"filters"}>
                <div className={"checkboxlist"}>
                {this.state.allCategories.map(name => {
                    return(
                        <Checkbox key={name} name={name} onChange={this.handleFilterSelect} checked={this.isSelected(name)}/>
                    );
                })}
                </div>
                <div className={"sorting"}>
                    <p className={"sortp"}>Items found {this.getVisibleItems().length} {this.state.selectedCategories.join(", ")}</p>
                    <SortDropdown
                        direction={this.state.sortDirection}
                        onChange={this.handleSortDropdown}
                        isSelected={this.isSelected}
                        sortMethod={this.state.sortMethod}
                    />
                 </div>
                </div>
             <ItemList items={this.getVisibleItems()} />
         </>
        );
    }
}

export default HomePage;