import { createTheme } from "@mui/material/styles";

const techTheme = createTheme({
  palette: {
    primary: { main: "#3742fa" }, // Electric Blue
    secondary: { main: "#ff4757" }, // Bright Red
    background: { default: "#F0F0F0", paper: "#FFFFFF" }, // Light Gray & White
    accent: { main: "#2ED573" }, // Fresh Green
    text: { primary: "#2C2C2C", secondary: "#636e72" }, // Dark Gray & Soft Gray
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default techTheme;
