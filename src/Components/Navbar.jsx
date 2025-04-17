import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid search term.");
      return;
    }
    setSearchTerm(inputValue.trim());
    setInputValue("");
    navigate("/products");
  };

  return (
    <>
      <AppBar
        className="navbar-sticky navbar"
        position="fixed"
        sx={{ backgroundColor: "rgb(78, 78, 240)" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "black", fontSize: "3rem" }}
          >
            Your Shopping Spot
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search products..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          />
          <IconButton onClick={handleSearchClick} sx={{ marginRight: "10px" }}>
            <SearchIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{ display: { xs: "none", md: "flex" } }}
            sx={{ marginRight: "2rem" }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
              onClick={() => setSearchTerm("")}
              sx={{ color: "black" }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/products"
              onClick={() => setSearchTerm("")}
              sx={{ color: "black" }}
            >
              Products
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/cart"
              onClick={() => setSearchTerm("")}
              sx={{ color: "black" }}
            >
              Cart
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { padding: "1rem", width: "250px" },
        }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary="Home" sx={{ pr: 2 }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/products"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary="Products" sx={{ pr: 2 }} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/cart"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary="Cart" sx={{ pr: 2 }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
