import logo from "./logo.svg";

import "./styles/globals.css";
import MUIThemeProvider from "theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import Pishkhan from "screens/Pishkhan";
import Router from "routes";
import { HelmetProvider } from "react-helmet-async";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function DirProvider({ children, direction }) {
  if (direction === "rtl") {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }
  return children;
}

function App() {
  const  {direction}  = useSelector((state) => state.language);

  const getContent = () => {
    return <Router />;
  };

  return (
    <MUIThemeProvider>
      <DirProvider  direction={direction} >
        {/* <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes> */}
        {/* <Dashboard /> */}
        {getContent()}
      </DirProvider>
    </MUIThemeProvider>
  );
}

export default App;
