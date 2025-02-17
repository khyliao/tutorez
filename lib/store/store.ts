import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./api/features/themeSlice";
import currentUserSlice from "./api/features/currentUserSlice";
import searchFieldSlice from "./api/features/searchFieldSlice";
import { api } from "./api/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      currentUser: currentUserSlice,
      searchField: searchFieldSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
