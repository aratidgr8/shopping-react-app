import React, { Component } from 'react';
import '../App.css';

class Product extends Component {

    constructor() {
        super();
        this.state = {
            editing: false
        }

        this.props = {}
    }

    add = () => {
        var val = this.props.children;
        this.props.addToCart(val,this.props.index);
    }

    edit = () => {
        this.setState({editing:true});
    }

    save = () => {
        var val = this.refs.txtProduct.value;
        this.setState({editing:false});
        this.props.updateProduct(val,this.props.index);
    }

    remove = () => {
        this.props.removeProduct(this.props.index);
    }

    renderNormal () {
        // <button onClick={this.edit}>Edit</button>
        // <button onClick={this.remove}>Remove</button>
        return (          
          <div className="productbox">                
                <div id={this.props.children.id} price={this.props.children.price} title={this.props.children.title}>
                    <img src={ `./../images/products/${this.props.children.sku}.jpg` } />
                    <h2>{this.props.children.title}</h2>
                </div>
                <button className="mybutton" onClick={this.add}>Buy</button>                
          </div>
          );
    }

    renderForm () {
        return (
            <div>
                <textarea ref="txtProduct" defaultValue={this.props.children} />
                <button onClick={this.save}>Save</button>
            </div>
        );
    }

    render () {
        if(this.state.editing){
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }


};

export default Product;
