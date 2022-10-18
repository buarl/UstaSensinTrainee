import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container, Row, Col} from 'reactstrap';

export default class App extends Component {
   state={currentCategory:""}
   changeCategory = (category)=>{
      this.setState({currentCategory:category.categoryName});
    };
    render(){
      let productInfo = {title:"Product List"};
      let categoryInfo = {title:"Category List"};

      return (
         <div>
            <Container>
                <Row>
                   <Navi/>
                </Row>
                <Row>
                   <Col xs="3"> //bootstrap 12 eşit parçaya ayırıyor, 3'ünü kullandım.
                     <CategoryList 
                     currentCategory={this.state.currentCategory} //state: bir component'e ait özel data
                     changeCategory = {this.changeCategory}
                     info = {categoryInfo}/>  
                   </Col>
                   <Col xs="9"> //geriye kalan 9 parçayı buraya ayırdım.
                     <ProductList 
                     products = {this.state.products}
                     currentCategory = {this.state.currentCategory}
                     info = {productInfo}/> 
                   </Col>
                </Row>
            </Container>
         </div>
    
       );
    }
}
