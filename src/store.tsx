import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactApi } from "@/src/services/contactApi/contactApi";
import tmpReducer, {
  photographyModalReducerPath,
} from "@/src/services/modalState/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [contactApi.reducerPath],
};

const appReducer = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  [photographyModalReducerPath]: tmpReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
const middlewares = [contactApi.middleware, contactApi.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
  // devTools: `${import.meta.env.NODE_ENV}` === "development",
});

setupListeners(store.dispatch);

export const persist = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
