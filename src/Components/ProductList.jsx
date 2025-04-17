import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "../CSS/ProductList.css";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const ProductList = ({ searchTerm }) => {
  const { products, loading, error } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  console.log("addToCart:", typeof addToCart);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Raw products array:", products);

  if (!Array.isArray(products)) {
    console.error("Products is not an array:", products);
    return <div>Error: Products data is invalid.</div>;
  }

  const filteredProducts = products.filter((product) => {
    if (!product || typeof product.title !== "string") {
      console.warn("Skipping product with invalid or missing title:", product);
      return false;
    }
 
    const searchTermLower = typeof searchTerm === 'string' ? searchTerm.toLowerCase() : '';
    return product.title.toLowerCase().includes(searchTermLower);
  });

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  console.log("Filtered products:", filteredProducts);

  if (!filteredProducts.length) {
    return (
      <div className="noProducts">
        <Typography style={{ fontSize: "2.5rem", rubyMerge: "true" }}>
          No products available.
        </Typography>
      </div>
    );
  }

  return (
    <div className="productList">
      {filteredProducts.map((product) => (
        <div key={product.id} className="productCard">
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card className="productCard">
              <CardContent className="cardContent">
                <Typography variant="h6" className="productTitle">
                  {product.title}
                </Typography>
                <img
                  src={product.image}
                  alt={product.title}
                  className="productImage"
                />
                <Typography variant="subtitle1" className="productPrice">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Button
            className="addToCartButton"
            style={{ color: "black", backgroundColor: "rgb(78, 78, 240)" }}
            variant="contained"
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
