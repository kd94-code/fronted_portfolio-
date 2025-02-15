import React from "react";
import { Box, Typography, Container, Grid, TextField, Button, IconButton, Divider } from "@mui/material";
import { Facebook, Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#333", color: "white", textAlign: "center", py: 4,  }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          {/* Navigation Links Section */}
          <Grid item xs={12} sm={4} textAlign="left">
        
            <Typography variant="body2" component="a" href="/" sx={{ display: "block", color: "white", textDecoration: "none", mt: 1 }}>Home</Typography>
            <Typography variant="body2" component="a" href="/about" sx={{ display: "block", color: "white", textDecoration: "none", mt: 1 }}>About</Typography>
            <Typography variant="body2" component="a" href="/blog" sx={{ display: "block", color: "white", textDecoration: "none", mt: 1 }}>Blog</Typography>
            <Typography variant="body2" component="a" href="/Contact" sx={{ display: "block", color: "white", textDecoration: "none", mt: 1 }}>Contact</Typography>
    
     
          </Grid>

          {/* Email Subscription Section */}
          <Grid item xs={12} sm={4} textAlign="right" sx={{ pr: 5 }}>
            <Typography variant="h6">Subscribe to our Newsletter</Typography>
            <Box component="form" sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <TextField 
                variant="outlined" 
                placeholder="Enter your email" 
                size="small" 
                sx={{ bgcolor: "white", borderRadius: 1, mr: 1 }}
              />
              <Button variant="contained" color="secondary">Subscribe</Button>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: "white", my: 2 }} />

        {/* Social Icons */}
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <Box>
              <IconButton href="https://facebook.com/" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="mailto:email@gmail.com" color="inherit">
                <Email />
              </IconButton>
              <IconButton href="https://instagram.com/" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} textAlign="center">
            <Typography variant="body2">© 2025 My Portfolio</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
