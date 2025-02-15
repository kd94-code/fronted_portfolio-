import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import theme from "./theme 12";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Blog from "./pages/Blog";
function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Fixed Header */}
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Header />
      </Box>
   
      {/* Main Content Area (Grows and Pushes Footer) */}
      <Box sx={{ flexGrow: 1, mt: "40px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Box>

      {/* Footer Stays at the Bottom */}
      <Footer />
      </ThemeProvider>
    </Box>
  );
}

export default App;

