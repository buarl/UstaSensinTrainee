import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

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
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Units in Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(products => ( /*map = döngü fonksiyonu, props: bir component'ten diğerine veri taşimak. State'den farklidir.*/
                            <tr
                                key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <Button color="info">Add to Cart</Button>{' '}
                            </tr>
                        ))}
                       
                    </tbody>
                </Table>
                
            </div>
        )
    }

}
