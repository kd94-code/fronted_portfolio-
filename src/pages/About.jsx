import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">About Me</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        I'm a passionate web developer specializing in React, Vite, and Material-UI.
      </Typography>
    </Container>
  );
};

export default About;
