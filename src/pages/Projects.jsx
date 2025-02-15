import React from "react";
import { Container, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">Projects</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Here are some of my recent web development projects.
      </Typography>
    </Container>
  );
};

export default Projects;
