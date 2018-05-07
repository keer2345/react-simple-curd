import React, { Component } from "react";
import "./App.css";

import ProductItem from "./ProductItem";
import ProductAdd from "./ProductAdd";

const products = [
  {
    name: "ipad",
    price: 200
  },
  {
    name: "iphone",
    price: 650
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }

  getProducts() {
    return this.state.products;
  }
  onDelete(name) {
    const products = this.getProducts();

    const filterProducts = products.filter(product => {
      return product.name !== name;
    });

    // console.log(filterProducts);})
    this.setState({ products: filterProducts });
  }

  onAdd(name, price) {
    // const products = this.getProducts();
    const products = this.getProducts();
    products.push({
      name,
      price
    });

    this.setState({ products });
  }

  onSave(name, price, originalName) {
    let products = this.getProducts();
    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        <ProductAdd onAdd={this.onAdd} />
        {this.state.products.map(product => {
          return (
            <ProductItem
              key={product.name}
              // name={product.name}
              // price={product.price}
              {...product}
              onDelete={this.onDelete}
              save={this.onSave}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
