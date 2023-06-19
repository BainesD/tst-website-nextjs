import AppLayout from "@/components/Layout/AppLayout";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
    text: { primary: "#ffffff" },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontWeight: 300,
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}
