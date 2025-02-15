import { createTheme } from "@mui/material/styles";

const artisticTheme = createTheme({
  palette: {
    primary: { main: "#E63946" }, // Deep Red
    secondary: { main: "#457B9D" }, // Muted Blue
    background: { default: "#F1FAEE", paper: "#FFFFFF" }, // Soft White
    accent: { main: "#A8DADC" }, // Light Teal
    text: { primary: "#1D3557", secondary: "#555555" }, // Navy & Gray
  },
  typography: {
    fontFamily: "Lora, serif",
  },
});

export default artisticTheme;
