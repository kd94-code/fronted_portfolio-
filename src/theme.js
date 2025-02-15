import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCA28", // Deep Yellow
    },
    secondary: {
      main: "#FF5722", // Deep Orange
    },
    background: {
      default: "#FFF3E0", // Peach
      paper: "#FFE0B2", // Lighter Peach
    },
    text: {
      primary: "#3E2723", // Dark Brown
      secondary: "#5D4037", // Medium Brown
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#FFCA28" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#FF5722" },
    body1: { fontSize: "1rem", color: "#3E2723" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFCA28",
          color: "#3E2723",
          "&:hover": { backgroundColor: "#FFA000" },
        },
      },
    },
  },
});

export default theme;
