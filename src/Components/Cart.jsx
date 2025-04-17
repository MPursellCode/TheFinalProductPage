import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "../CSS/Cart.css";

const Cart = () => {
  const { cart, addToCart, clearCart, setCart } = useContext(CartContext);

  const calculateSubtotal = () => {
    if (!Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const taxRate = 0.0925;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  if (!cart || cart.length === 0) {
    return (
      <Box className="cart-container">
        <Typography variant="h4" className="cart-title">
          Shopping Cart
        </Typography>
        <Typography
          variant="h6"
          className="cart-empty"
        >
          Your cart is currently empty.
        </Typography>
      </Box>
    );
  }

  const removeItem = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const incrementQuantity = (product) => {
    addToCart(product);
  };

  return (
    <Box className="cart-container">
      <Typography variant="h4" className="cart-title">
        Shopping Cart
      </Typography>
      <List className="cart-list">
        {cart.map((item) => (
          <ListItem key={item.id} className="cart-item">
            <ListItemAvatar>
              <Avatar
                alt={item.title}
                src={item.image}
                className="cart-item-avatar"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography className="cart-item-primary">
                  {item.title}
                </Typography>
              }
              secondary={
                <Typography className="cart-item-secondary">
                  ${item.price.toFixed(2)} x {item.quantity}
                </Typography>
              }
              className="cart-item-text"
            />
            <IconButton
              edge="end"
              aria-label="increment"
              onClick={() => incrementQuantity(item)}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => removeItem(item)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Box className="cart-summary">
        <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
        <Typography variant="h6">Tax (8%): ${tax.toFixed(2)}</Typography>
        <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default Cart;
