import { createTheme } from "@mui/material/styles";

const oceanTheme = createTheme({
  palette: {
    primary: { main: "#0077B6" }, // Ocean Blue
    secondary: { main: "#90E0EF" }, // Light Aqua
    background: { default: "#CAF0F8", paper: "#FFFFFF" }, // Light Blue & White
    accent: { main: "#48CAE4" }, // Aqua Blue
    text: { primary: "#023E8A", secondary: "#555555" }, // Deep Blue & Gray
  },
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

export default oceanTheme;
