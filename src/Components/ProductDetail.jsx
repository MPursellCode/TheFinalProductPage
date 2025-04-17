import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Typography, CircularProgress, Box, Button } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { getProductDetail } from "../assets/Apis";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductDetail(id);
        if (productData) {
          setProduct(productData);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError(error.message || "Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6">Error: {error}</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box className="product-detail-container">
      <div className="product-detail-content">
        <Typography
          variant="h4"
          className="product-detail-title"
          style={{ marginTop: "10rem" }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body1"
          className="product-detail-description"
          paragraph
          style={{ fontSize: "1.5rem" }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="h6"
          className="product-detail-price"
          style={{ fontSize: "2rem" }}
        >
          Price: ${product.price}
        </Typography>
      </div>
      <div className="product-detail-buttons" style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#4e4ef0", color: "black" }}
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
        >
          Add to Cart
        </Button>
        <Button
          style={{ backgroundColor: "#4e4ef0", color: "black", float: "right" }}
          variant="contained"
          component={Link}
          to="/products"
        >
          Back to Products
        </Button>
      </div>
    </Box>
  );
};

export default ProductDetail;
