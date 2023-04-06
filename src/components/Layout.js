import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../logo.png";
import { styled } from "@mui/system";
import SearchMovieSuggestion from "../containers/SearchMovieSuggestion";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Img = styled("img")({
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  width: 500,
  maxWidth: "100%",
});

const LayoutWrapper = styled("div")(({ theme }) => ({
  width: "auto",
  margin: 24,
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg,
  },
}));

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LayoutWrapper>
        <Link to="/">
          <Img src={logoImg} alt="movie logo" />
        </Link>
        <SearchMovieSuggestion />
      </LayoutWrapper>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
