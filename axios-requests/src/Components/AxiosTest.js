import React, { Component } from "react";
import axios from "axios";

class AxiosTest extends Component {

    state = {
      products: [],
    };

    componentDidMount(){
        axios.get('https://store.avanceesoftware.com/product-categories/mock').then(res => {
            console.log(res);
            this.setState({ products: res.data });
        });
    }
    render() {
        return (
            <ul>
                {this.state.products.map(product => <li key={product.id}>{product.name}</li>)}
            </ul>
        )
    }
}

export default AxiosTest;
