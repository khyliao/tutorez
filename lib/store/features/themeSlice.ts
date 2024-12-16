import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ThemeState {
  value: string;
}

const initialState = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.value === "light") {
        state.value = "dark";
        return;
      }

      state.value = "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
