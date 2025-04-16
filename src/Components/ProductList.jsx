import React, { useContext } from "react";
import { ProductContext } from "../../ProductContext";
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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
