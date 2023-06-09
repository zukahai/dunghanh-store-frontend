import React from 'react';
import './products.css';
import {NavLink} from 'react-router-dom';

class ListProductComponent extends React.Component {
    componentDidMount() {
        document.title = "Products"
    }
    state = {
        products: [
            {id: 1, name: 'Product 1', description: 'Product 1 description', price: '100', imageUrl: 'https://picsum.photos/200/101'},
            {id: 2, name: 'Product 2', description: 'Product 2 description', price: '200', imageUrl: 'https://picsum.photos/200/102'},
            {id: 3, name: 'Product 3', description: 'Product 3 description', price: '300', imageUrl: 'https://picsum.photos/200/103'},
            {id: 4, name: 'Product 4', description: 'Product 4 description', price: '400', imageUrl: 'https://picsum.photos/200/104'},
            {id: 5, name: 'Product 5', description: 'Product 5 description', price: '500', imageUrl: 'https://picsum.photos/200/105'},
        ],
        isLoading: false,
    };

    render() {
        return (
            <>
                <div className="list-product-container">
                <h2>List of Products</h2>
                <ul>
                    {this.state.products.map((product) => (
                    <li key={product.id} className='product-li'>
                        <NavLink to={"product/" + product.id} exact="true">
                            <img className='img-product' src={product.imageUrl} alt={product.name} />
                        </NavLink>
                        <div className="product-details">
                        <h2>
                            <NavLink to={"product/" + product.id} exact="true">
                                {product.name}
                            </NavLink>
                        </h2>
                        <p>{product.description}</p>
                        <span>{product.price} USD</span>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </>
        );
    }
}

export default ListProductComponent;