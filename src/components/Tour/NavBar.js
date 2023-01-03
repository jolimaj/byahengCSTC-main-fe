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
  ListItemIcon,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, Logout } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import axios from "../../config/axios";
import Logo from "../../img/cropped-cstc-logo-2.png";

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const role = JSON.parse(localStorage.getItem("session"));
  console.log("🚀 ~ file: NavBar.js ~ line 24 ~ NavBar ~ role", role);
  const [selected, setSelected] = useState(0);

  const pages = [
    { name: "Tour", path: "/tour" },
    { name: "Pre-Enrollment", path: "/tour/pre_enroll" },
  ];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let [nav, setNav] = useState(0);
  const handleNav = (event, index) => {
    switch (index) {
      case 1:
        window.location.href = "/tour/pre_enroll";
        break;
      default:
        window.location.href = "/tour";
    }
    setNav(event.target.value);
  };

  async function handleLogout(e) {
    e.preventDefault();
    try {
      const id = role.data.id;
      await axios.put(`/signout/${id}`);
      localStorage.clear();
      window.location.href = "/tour/signin";
    } catch (error) {
      console.log("catch", error);
    }
  }
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
              {role.data.roleID === 2 &&
                pages.map((page, i) => (
                  <Link
                    underline="none"
                    component="button"
                    variant="subtitle1"
                    key={i}
                    value={i}
                    onClick={(event) => {
                      handleNav(event, i);
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
                ))}
              {role.data.roleID === 3 && (
                <Link
                  underline="none"
                  component="button"
                  variant="subtitle1"
                  key={0}
                  value={0}
                  onClick={(event) => {
                    handleNav(event, 0);
                    setSelected(0);
                  }}
                  sx={{
                    my: 2,
                    display: "block",
                    px: 2,
                  }}
                  style={{
                    fontFamily:
                      location.pathname === pages[0].path
                        ? "PoppinsBold"
                        : "PoppinsRegular",
                    color:
                      location.pathname === pages[0].path ? "#134611" : "#666",
                    // backgroundColor:
                    //   location.pathname === page.path ? "#134611" : "#FFF",
                  }}
                >
                  {pages[0].name}
                </Link>
              )}
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
            {role.data.roleID === 2 &&
              pages.map((page, i) => (
                <Link
                  underline="none"
                  component="button"
                  variant="subtitle1"
                  key={i}
                  value={i}
                  onClick={(event) => {
                    handleNav(event, i);
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
            {role.data.roleID === 3 && (
              <Link
                underline="none"
                component="button"
                variant="subtitle1"
                key={0}
                value={0}
                onClick={(event) => {
                  handleNav(event, 0);
                  setSelected(0);
                }}
                sx={{
                  my: 2,
                  display: "block",
                  px: 2,
                }}
                style={{
                  fontFamily:
                    location.pathname === pages[0].path
                      ? "PoppinsBold"
                      : "PoppinsRegular",
                  color:
                    location.pathname === pages[0].path ? "#134611" : "#666",
                  // backgroundColor:
                  //   location.pathname === page.path ? "#134611" : "#FFF",
                }}
              >
                {pages[0].name}
              </Link>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle color="primary" />
            </IconButton>
            <Menu
              sx={{ mt: "45px", padding: 10 }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
