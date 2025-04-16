import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            <div id="product-container">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-item"
                        data-price={product.price}
                    >
                        <img
                            src={product.image}
                            alt={product.name || 'Product Image'} // Added fallback for alt attribute
                            className="product-image"
                        />
                        <h2>{product.name}</h2>
                        <p>${product.price.toFixed(2)}</p>
                        <button >Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
