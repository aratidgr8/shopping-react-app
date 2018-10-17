import React, { Component } from 'react';
import Product from './Product';
import Data from '../data/products.json';
import Cart from './Cart';

class Board extends Component {

    constructor() {
        super();

        this.state = {
            Products : ['Product 1','Product 2','Product3'],    
            CartItems : []
        }
    }

    componentWillMount = () => {
        let productJSON = [] //initialize array to receive json data

        for (let i =0; i < Data.products.length; i++) {
            productJSON.push(Data.products[i])
        }
        //console.log(productJSON);
        this.setState({Products: productJSON});
    }

    render () {
        return (
                <div>
                    <div className="board">
                        <input type="text" ref="txt_Product"></input>
                        <button onClick={this.addProduct}>Add Product</button><br></br><br></br>
                        {
                            this.getProducts()
                        }

                    </div>
                {this.getCartItems()}
                <div className="clear"></div>
            </div>
        )
    }

    getProducts () {
        var self = this;
        return (
            this.state.Products.map(function (text,i) {
                return (
                        
                            <Product key={i} index={i} removeProduct={self.removeProducts} updateProduct={self.updateProduct} addToCart={self.addToCart}>
                                {text}
                            </ Product >                    
                )
            })
        )
    }

    removeProducts = (i) => {
        var data = this.state.CartItems;
        data.splice(i,1);
        this.setState({CartItems:data});
    }

    updateProduct = (newText,i) => {
        var data = this.state.Products;
        data[i] = newText;
        this.setState({Products:data});
    }

    addProduct = () => {
        var data = this.state.Products;
        data.push(this.refs.txt_Product.value);
        this.setState({Products:data});
    }

    addToCart = (obj,i) => {

        var data = this.state.CartItems;
        data.push(obj);
        this.setState({CartItems:data});            
        
    }

    getCartItems () {
        return (<Cart data={this.state.CartItems} /> );
    }


};

export default Board;
