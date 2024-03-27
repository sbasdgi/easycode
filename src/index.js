import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useStore } from "./redux/store";
const Index = () => {
   const store = useStore();
   const persistor = persistStore(store, {}, () => {
     persistor.persist();
   });

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
        </PersistGate>
    </ReduxProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
