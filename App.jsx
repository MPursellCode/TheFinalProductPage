import React, { useState } from 'react';
import ProductList from './product-list';
import Navbar from './src/Components/navbar';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './product-context';
import { CartProvider } from './cart-context';

const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 9.99, image: '/images/product3.jpg' },
];

const AppContent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div style={{ paddingTop: '4rem' }}>
            <ProductList products={products} />
        </div>
    );
};

const App = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                    <AppContent />
                </BrowserRouter>
            </CartProvider>
        </ProductProvider>
    );
};

export default App;
