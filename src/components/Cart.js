import React, { Component } from 'react';

class Cart extends Component {
    constructor() {
        super();
        this.props = {}    
    }

render() {
        return (
            <header className="cart-float-ss">
                <h1>Shopping Cart</h1>
                <ul>
                {
                      this.props.data.map(function (text,i) {
                        return (
                                <li>
                                    {text.title}&nbsp;{text.price} <button>Remove</button>
                                </li>
                        );
                      })
                }
                </ul>
            </header>
        );
    }

}

export default Cart;
