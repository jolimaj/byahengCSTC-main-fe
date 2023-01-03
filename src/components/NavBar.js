import { React, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../img/cropped-cstc-logo-2.png";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Activity", path: "/activity" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [selected, setSelected] = useState(0);
  const tourView = () => {
    window.location.href = "/tour/signin";
  };
  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              display: { xs: "none", md: "flex" },
              py: 2,
              width: 200,
              mr: 5,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  key={i}
                  onClick={handleCloseNavMenu}
                  selected={location.pathname === page.path}
                >
                  <Link
                    underline="none"
                    component="button"
                    variant="subtitle1"
                    key={i}
                    value={i}
                    onClick={(event) => {
                      props.navClick(event, i);
                      setSelected(i);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      px: 2,
                    }}
                    style={{
                      fontFamily:
                        location.pathname === page.path
                          ? "PoppinsBold"
                          : "PoppinsRegular",
                      color:
                        location.pathname === page.path ? "#134611" : "#666",
                      // backgroundColor:
                      //   location.pathname === page.path ? "#134611" : "#FFF",
                    }}
                  >
                    {page.name}
                  </Link>
                  {/* <Button
                    variant="text"
                    key={i}
                    value={i}
                    sx={{ my: 2, display: "block", alignContent: "center" }}
                    style={{ fontWeight: "bold" }}
                    onClick={(event) => {
                      props.navClick(event, i);
                      setSelected(i);
                    }}
                  >
                    {page.name}
                  </Button> */}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              display: { xs: "flex", md: "none" },
              width: 200,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            color="primary"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Link
                underline="none"
                component="button"
                variant="subtitle1"
                key={i}
                value={i}
                onClick={(event) => {
                  props.navClick(event, i);
                  setSelected(i);
                }}
                sx={{
                  my: 2,
                  display: "block",
                  px: 2,
                }}
                style={{
                  fontFamily:
                    location.pathname === page.path
                      ? "PoppinsBold"
                      : "PoppinsRegular",
                  color: location.pathname === page.path ? "#134611" : "#666",
                  // backgroundColor:
                  //   location.pathname === page.path ? "#134611" : "#FFF",
                }}
              >
                {page.name}
              </Link>
            ))}

            {/* {pages.map((page, i) => (
              <Button
                variant="text"
                key={i}
                value={i}
                onClick={(event) => {
                  props.navClick(event, i);
                  setSelected(i);
                }}
                sx={{
                  my: 2,
                  display: "block",
                  px: 2,
                }}
                style={{
                  fontWeight: "bold",
                  color: location.pathname === page.path ? "#FFFF" : "#134611",
                  backgroundColor:
                    location.pathname === page.path ? "#134611" : "#FFF",
                }}
              >
                {page.name}
              </Button>
            ))} */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{ my: 2, display: "block" }}
              variant="contained"
              onClick={tourView}
            >
              Tour
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
