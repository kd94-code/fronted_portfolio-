import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "../assets/new.webp";

const Home = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", py: isMobile ? 5 : 10, bgcolor: "#f4f4f4" }}>
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
                  Welcome to My Portfolio
                </Typography>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  color="secondary"
                  fontWeight="bold"
                  sx={{ mt: 1 }}
                >
                  Crafting Digital Experiences with Code & Creativity
                </Typography>
                <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
                  Hi, I'm Kuldeep — A Website Developer
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 1 }}>
                  I specialize in building high-performance, visually stunning, and user-friendly
                  websites that bring ideas to life. Whether it's crafting seamless UI/UX, optimizing
                  web speed, or developing scalable applications — I make it happen.
                </Typography>
                <Box sx={{ mt: 3 }}>
                   <Button
                          variant="contained"
                          color="primary"
                          href="/path-to-your-resume.pdf"
                          download
                          sx={{ mt: 2, mr: 2 }}
                        >
                          Download Resume
                        </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: isMobile ? "150px" : "250px", // Adjust size for mobile and desktop
                  height: isMobile ? "150px" : "250px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={Image}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
