import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "../Styles/drawerappbar.css";
import { ThemeContext } from "..";
import { DEFAULT_THEME } from "..";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const drawerWidth = 240;

const navItems = [
  { name: "LA CARTE", path: "/#lacarte" },
  { name: "LE RESTAURANT", path: "/#lerestaurant" },
  { name: "CONTACT", path: "/#contact" },
  { name: "NEWS", path: "/#restaurantleduc" },
  { name: "RESERVA", path: "/reserva" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? "activeNav" : isPending ? "pending" : "";
            }}
            to="/"
          >
            <img
              src={
                theme === DEFAULT_THEME
                  ? "/images/logo.png"
                  : "/images/logo.png"
              }
              alt="Logo"
              className="logo-image"
            />
          </NavLink>

          <Divider />
          <List>
            {navItems.map(({ name, path }, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <Link to={path}>
                    <ListItemText primary={name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </ThemeContext.Consumer>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav" sx={{ backgroundColor: "white" }}>
            <Toolbar sx={{ justifyContent: "space-around" }}>
              <IconButton
                color="#000"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <NavLink
                  className={({ isActive, isPending }) => {
                    return isActive ? "activeNav" : isPending ? "pending" : "";
                  }}
                  to="/"
                >
                  <img
                    src={
                      theme === DEFAULT_THEME
                        ? "/images/logo.png"
                        : "/images/logo.png"
                    }
                    alt="Logo"
                    className="logo-image"
                  />
                </NavLink>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map(({ name, path }, i) => (
                  <Button key={i} sx={{ color: "#000" }}>
                    <Link to={path}>{name}</Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box component="main" sx={{ p: 3, padding: 0 }}>
            <Toolbar />
          </Box>
        </Box>
      )}
    </ThemeContext.Consumer>
  );
}

export default DrawerAppBar;
