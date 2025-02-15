import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Blog = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Crafting Digital Experiences: A Website Developer’s Journey
      </Typography>
      
      <Typography variant="h5" color="primary" gutterBottom>
        Welcome to My Portfolio! 🚀
      </Typography>

      <Typography variant="body1" paragraph>
        In today's digital era, having a strong online presence is essential for businesses and individuals alike. 
        As a <strong>website developer</strong>, I believe in <strong>transforming ideas into powerful digital experiences</strong>. 
        My passion lies in crafting websites that are not only <em>visually stunning</em> but also <em>high-performing, user-friendly, and scalable</em>.
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Why a Great Website Matters?
      </Typography>

      <Typography variant="body1" paragraph>
        A website is more than just an online presence—it's a <strong>brand identity</strong>. A well-developed site:
      </Typography>

      <ul>
        <li>✅ <strong>Enhances credibility</strong> – First impressions matter, and a well-structured website builds trust.</li>
        <li>✅ <strong>Engages visitors</strong> – With smooth UI/UX, users stay longer and explore more.</li>
        <li>✅ <strong>Boosts conversions</strong> – A fast, mobile-friendly site turns visitors into customers.</li>
        <li>✅ <strong>Optimizes SEO</strong> – Clean code and performance optimization help rank higher on search engines.</li>
      </ul>

      <Typography variant="h6" color="secondary" gutterBottom>
        My Expertise in Website Development
      </Typography>

      <Typography variant="body1" paragraph>
        I specialize in <strong>React, Vite, and modern web technologies</strong> to build websites that stand out. My skills include:
      </Typography>

      <ul>
        <li>🔹 <strong>Custom Website Development</strong> – Tailored solutions for businesses and individuals.</li>
        <li>🔹 <strong>UI/UX Optimization</strong> – Creating smooth, responsive, and intuitive designs.</li>
        <li>🔹 <strong>Performance & Speed Enhancement</strong> – Ensuring fast-loading, lightweight websites.</li>
        <li>🔹 <strong>Scalability & Security</strong> – Developing future-proof applications with best practices.</li>
      </ul>

      <Typography variant="h6" color="secondary" gutterBottom>
         Download My Resume
      </Typography>

      <Typography variant="body1" paragraph>
        If you're looking for a <strong>dedicated website developer</strong> who can bring your vision to life, let's connect!
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="/path-to-your-resume.pdf"
        download
        sx={{ mt: 2, mr: 2 }}
      >
        Download Resume
      </Button>

      
    </Container>
  );
};

export default Blog;
