import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={true}
            pauseOnHover
            theme="colored"
          />
        </PersistGate>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
