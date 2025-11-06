"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalAlert from "./Shared-ui/GlobalAlert";
import { persistor, store } from "../rtk/store";
import theme from "../mui-theme";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalAlert/>
        {children}
      </ThemeProvider>
      </PersistGate>
      </Provider>
  );
}
