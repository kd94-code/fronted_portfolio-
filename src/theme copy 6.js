import { createTheme } from "@mui/material/styles";

const vibrantTheme = createTheme({
  palette: {
    primary: { main: "#FF4C29" }, // Bright Orange
    secondary: { main: "#1B9CFC" }, // Vivid Blue
    background: { default: "#F5F5F5", paper: "#FFFFFF" }, // Light Gray & White
    accent: { main: "#F8EFBA" }, // Soft Yellow
    text: { primary: "#212121", secondary: "#555555" }, // Dark Gray & Medium Gray
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default vibrantTheme;
