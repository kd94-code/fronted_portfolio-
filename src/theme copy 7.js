import { createTheme } from "@mui/material/styles";

const darkGoldTheme = createTheme({
  palette: {
    primary: { main: "#1A1A2E" }, // Deep Navy
    secondary: { main: "#FFD700" }, // Gold
    background: { default: "#101820", paper: "#282C34" }, // Dark Gray & Charcoal
    accent: { main: "#DAA520" }, // Goldenrod
    text: { primary: "#F5F5F5", secondary: "#C0C0C0" }, // White & Silver
  },
  typography: {
    fontFamily: "Playfair Display, serif",
  },
});

export default darkGoldTheme;
