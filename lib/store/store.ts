import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./api/features/themeSlice";
import currentUserSlice from "./api/features/currentUserSlice";
import { api } from "./api/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      currentUser: currentUserSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
