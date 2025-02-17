import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const initialState = {
  value: "",
};

const searchFieldSlice = createSlice({
  name: "searchField",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchFieldSlice.actions;
export const selectSearchFieldValue = (state: RootState) => state.searchField.value;

export default searchFieldSlice.reducer;
