import React from "react";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import SortDropdown from "../components/SortDropdown.jsx";

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
        fetch("/api/v1/items")
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
        console.log(event.target.value);
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
                        <Checkbox key={name} name={name} onChange={this.handleDropdown} checked={this.isSelected(name)}/>
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