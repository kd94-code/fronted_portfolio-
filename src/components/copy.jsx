import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Drawer, List, ListItem } from "@mui/material";
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
      {/* Fixed Header */}
      <AppBar position="fixed" sx={{ bgcolor: theme.palette.mode === "dark" ? "#333" : "primary.main" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>My Portfolio</Typography>

            {/* Mobile Menu */}
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={toggleMobileMenu}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
                  <List>
                    {pages.map((page) => (
                      <ListItem key={page} button component={Link} to={`/${page.toLowerCase()}`} onClick={toggleMobileMenu}>
                        {page}
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {pages.map((page) => (
                  <Button key={page} color="inherit" component={Link} to={`/${page.toLowerCase()}`}>
                    {page}
                  </Button>
                ))}
              </Box>
            )}

            {/* User Avatar Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                sx={{ mt: "45px" }}
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
    </>
  );
}

export default Header;
