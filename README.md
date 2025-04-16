# TheFinalProductPage
# Product Page Application

## Overview
This is a responsive e-commerce product page application built with React, Material-UI, and React Router. It allows users to browse products, search for items, view product details, and manage their shopping cart. The application is styled using Material-UI components and includes a responsive navigation bar.

## Features
- **Search Functionality**: Search for products using the search bar in the navigation bar.
- **Responsive Navigation Bar**: Includes a drawer menu for smaller screens and inline buttons for larger screens.
- **Product Listing**: Displays a list of products fetched from the [Fake Store API](https://fakestoreapi.com/).
- **Product Details**: View detailed information about a specific product.
- **Shopping Cart**: Add products to the cart, adjust quantities, and view the total cost.

## Technologies Used
- React
- Material-UI
- React Router
- Fake Store API (for product data)
- Vite (for development and build)

## Project Structure
product-page/ ├── public/ ├── src/ │ ├── Components/ │ │ ├── NavBar.jsx │ │ ├── ProductList.jsx │ │ ├── ProductDetail.jsx │ │ ├── Cart.jsx │ │ ├── ProductContext.jsx │ │ └── CartContext.jsx │ ├── CSS/ │ │ ├── App.css │ │ ├── Cart.css │ │ ├── gitProductList.css │ │ └── root.css │ ├── assets/ │ │ └── myApis.js │ ├── App.jsx │ ├── main.jsx │ └── vite.config.js ├── .gitignore ├── package.json └── README.md

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/MPursellCode/TheFinalProductPage.git

2. Navigate to the project directory:
cd TheFinalProductPage

3. Install dependencies:
npm install

4. Start the development server:
npm run dev

5. Open your browser and navigate to http://localhost:3000 to view the application.

Usage
Use the navigation bar to switch between pages (Home, Products, Cart).
Search for products using the search bar.
Add products to the cart and view the cart summary.
Click on a product to view its details.

API
This project uses the Fake Store API to fetch product data.

Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.