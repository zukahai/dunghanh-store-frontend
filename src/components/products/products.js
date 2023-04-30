import React from 'react';
import './products.css';

class ListProductComponent extends React.Component {
    state = {
        products: [
            {id: 1, name: 'Product 1', description: 'Product 1 description', price: '100', imageUrl: 'https://picsum.photos/200/400'},
            {id: 2, name: 'Product 2', description: 'Product 2 description', price: '200', imageUrl: 'https://picsum.photos/200/400'},
        ],
        isLoading: false,
    };

    componentDidMount() {
        

    }

    render() {
        return (
            <>
                <div className="list-product-container">
                <h2>List of Products</h2>
                <ul>
                    {this.state.products.map((product) => (
                    <li key={product.id}>
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-details">
                        <h3>{product.name}</h3>
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