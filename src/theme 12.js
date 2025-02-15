import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: { main: "#AB886D" }, // Warm Brown
    secondary: { main: "#D6C0B3" }, // Soft Beige
    background: { default: "#E4E0E1", paper: "#FFFFFF" }, // Light Grayish Tone
    accent: { main: "#493628" }, // Deep Coffee Brown
    text: { primary: "#493628", secondary: "#6D5A4D" }, // Dark & Muted Brown
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default customTheme;
