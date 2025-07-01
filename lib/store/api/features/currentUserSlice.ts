import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import {IUser} from '@/types/users'



const initialState = {
  value: {} as IUser,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;

export const selectCurrentUser = (state: RootState) => state.currentUser.value;

export default currentUserSlice.reducer;
