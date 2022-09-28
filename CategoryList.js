import React, {Component } from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class CategoryList extends Component {
    state = {categories: [{categoryID:1, categoryName:"El Aletleri"},
                          {categoryID:2, categoryName:"Elektronik"}],

      currentCategory:""
  };
  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName});
  };
    render() {
        return (
            <div>
                <h3> {this.props.info.title} </h3>
                <ListGroup>
                    {
                        this.state.categories.map(category=>( /*map = döngü fonksiyonu*/
                            <ListGroupItem onClick = {()=>this.changeCategory(category)} 
                                                     key= {category.categoryID}> {category.categoryName} 
                            </ListGroupItem>
                        ))
                    }
                  <ListGroupItem> Mekanik </ListGroupItem>
                  <ListGroupItem> El Aletleri </ListGroupItem>
                  <ListGroupItem> Hirdavat </ListGroupItem>
                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>
        );
    }
}
