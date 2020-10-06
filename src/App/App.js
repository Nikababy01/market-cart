import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import productData from '../helpers/data/productData';
import Products from '../components/Products';
// import Filter from '../components/Filter';
// import Basket from '../components/Basket';
// import store from '../store';
import './App.scss';
// import Copyright from '../components/Copyright';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [] };
  }

  componentWillMount() {
    fetch('http://localhost:3000/products').then((res) => res.json())
      .then((data) => this.setState({
        products: data,
        filteredProducts: data,
      }));
  }

  // componentDidMount() {
  //   const products = productData.getProducts();
  //   this.setState({ products });
  //   console.log('products', products);
  // }

  render() {
    return (
      <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
           <div className="row">
            <div className="col-md-8">
             <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
            </div>
            </div>
            </div>
    );
  }
}

export default App;
