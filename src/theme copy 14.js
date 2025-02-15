import { createTheme } from "@mui/material/styles";

const forestTheme = createTheme({
  palette: {
    primary: { main: "#2F5233" }, // Deep Green
    secondary: { main: "#A3B18A" }, // Olive Green
    background: { default: "#EAE0D5", paper: "#FFFFFF" }, // Light Beige
    accent: { main: "#DDBEA9" }, // Soft Brown
    text: { primary: "#3A3A3A", secondary: "#5E5E5E" }, // Dark Gray & Medium Gray
  },
  typography: {
    fontFamily: "Noto Serif, serif",
  },
});

export default forestTheme;
