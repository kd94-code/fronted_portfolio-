import { createTheme } from "@mui/material/styles";

const elegantTheme = createTheme({
  palette: {
    primary: { main: "#0F172A" }, // Midnight Blue
    secondary: { main: "#FFD700" }, // Gold
    background: { default: "#FBF6EE", paper: "#FFFFFF" }, // Off White & White
    accent: { main: "#8B0000" }, // Deep Red
    text: { primary: "#1B1B1B", secondary: "#555555" }, // Dark & Medium Gray
  },
  typography: {
    fontFamily: "Playfair Display, serif",
  },
});

export default elegantTheme;
