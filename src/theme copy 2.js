import { createTheme } from "@mui/material/styles";

const boldTheme = createTheme({
  palette: {
    primary: { main: "#FF5733" }, // Vivid Orange-Red
    secondary: { main: "#2980B9" }, // Deep Blue
    background: { default: "#F7F9F9", paper: "#FFFFFF" }, // Off White
    accent: { main: "#27AE60" }, // Green Accent
    text: { primary: "#2C3E50", secondary: "#7F8C8D" }, // Dark Gray & Soft Gray
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default boldTheme;
