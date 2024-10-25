"use client";

import { Provider } from "react-redux";
import { persist, store } from "@/src/store";
import { PersistGate } from "redux-persist/integration/react";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      {children}
    </PersistGate>
  </Provider>
);
