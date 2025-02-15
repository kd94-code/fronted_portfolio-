import React from "react";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold">Contact Me</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Feel free to reach out via email or social media!
      </Typography>
    </Container>
  );
};

export default Contact;
