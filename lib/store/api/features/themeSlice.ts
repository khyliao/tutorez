import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

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
        localStorage.setItem("theme", "dark");
        return;
      }

      state.value = "light";
      localStorage.setItem("theme", "light");
    },
    initTheme: (state, action) => {
      state.value = action.payload
    }
  },
  
});

export const { toggleTheme, initTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
