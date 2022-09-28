import React, {Component } from 'react';

export default class ProductList extends Component {
    constructor(props) {
        super(props);/*use when defining the constructor of a subclass. 
                       All React component classes that have a constructor should start with a super(props) call.*/
        this.state = { 
          value: null,
        };
    }
    render() {
        return (
            <div>
                <h3> {this.props.info.title} </h3>

            </div>
        )
    }

}
    