import { createTheme } from "@mui/material/styles";

const modernTheme = createTheme({
  palette: {
    primary: { main: "#0A192F" }, // Deep Blue
    secondary: { main: "#64FFDA" }, // Neon Green
    background: { default: "#F0F0F0", paper: "#FFFFFF" }, // Light Gray & White
    accent: { main: "#FF4081" }, // Bright Pink
    text: { primary: "#2C3E50", secondary: "#7F8C8D" }, // Dark Gray & Soft Gray
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default modernTheme;
