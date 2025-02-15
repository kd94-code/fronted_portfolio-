import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = ["Home", "About", "Projects", "Blog"];
const settings = ["Profile", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
 const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        sx={{
          bgcolor: theme.palette.mode === "dark" ? "#333" : "primary.main",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Mobile: Menu Icon on the Left */}
            {isMobile && (
              <IconButton color="inherit" onClick={toggleMobileMenu} sx={{ mr: 1 }}>
                <MenuIcon />
              </IconButton>
            )}

            {/* Portfolio Title - Centered on Mobile */}
            <Typography
              variant="h6"
              sx={{
                flexGrow: isMobile ? 1 : 0,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              My Portfolio
            </Typography>

            {/* Desktop: Centered Navigation Links */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    color="inherit"
                    component={Link}
                    to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            )}

            {/* User Menu (Always on the Right) */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="k" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ mt: 1 }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer for Navigation */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
        <List sx={{    margin: "48px 2px",padding: "2px"}}>
          {pages.map((page) => (
            <ListItem
              key={page}
              button
              component={Link}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              onClick={toggleMobileMenu}
            >
              {page}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
