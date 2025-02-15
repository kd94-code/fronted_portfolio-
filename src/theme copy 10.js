import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: { main: "#282C34" }, // Charcoal Gray
    secondary: { main: "#61DAFB" }, // React Blue
    background: { default: "#1E1E1E", paper: "#282C34" }, // Dark Gray
    accent: { main: "#FF9800" }, // Orange
    text: { primary: "#FFFFFF", secondary: "#BDBDBD" }, // White & Light Gray
  },
  typography: {
    fontFamily: "Fira Code, monospace",
  },
});

export default darkTheme;
