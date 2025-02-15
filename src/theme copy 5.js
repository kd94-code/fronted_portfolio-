import { createTheme } from "@mui/material/styles";

const pastelTheme = createTheme({
  palette: {
    primary: { main: "#A2D2FF" }, // Soft Blue
    secondary: { main: "#FFAFCC" }, // Pastel Pink
    background: { default: "#FEECE2", paper: "#FFFFFF" }, // Light Cream & White
    accent: { main: "#FFC8A2" }, // Soft Orange
    text: { primary: "#333333", secondary: "#666666" }, // Dark & Medium Gray
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default pastelTheme;
