import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";


export const App = ()  => {


  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <GlobalStyle/>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
};
