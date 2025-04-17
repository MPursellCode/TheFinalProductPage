import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import "../App.css";
import "./CSS/index.css";
import { ProductProvider, ProductContext } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import { CircularProgress, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "montez, cursive",
  },
});

const AppContent = ({ searchTerm }) => {
  const { loading, error } = useContext(ProductContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("homepage");
    } else {
      document.body.classList.remove("homepage");
    }

    return () => {
      document.body.classList.remove("homepage");
    };
  }, [location.pathname]);

  if (loading)
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
  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );

  return (
    <Box
      component="main"
      sx={{
        mt: { xs: "8rem", sm: "10rem" },
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Routes>
        <Route path="/" element={<></>} />
        <Route
          path="/products"
          element={<ProductList searchTerm={searchTerm} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Box>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar setSearchTerm={setSearchTerm} />
            <div
              style={{
                position: "relative",
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <AppContent searchTerm={searchTerm} />
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
