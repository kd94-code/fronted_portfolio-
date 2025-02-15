import { createTheme } from "@mui/material/styles";

const purpleTheme = createTheme({
  palette: {
    primary: { main: "#7B2CBF" }, // Royal Purple
    secondary: { main: "#E0AFFF" }, // Soft Lavender
    background: { default: "#F8F0FB", paper: "#FFFFFF" }, // Very Light Purple
    accent: { main: "#F72585" }, // Hot Pink
    text: { primary: "#4A148C", secondary: "#6A0572" }, // Deep Purple & Violet
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default purpleTheme;
