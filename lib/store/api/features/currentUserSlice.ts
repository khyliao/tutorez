import { Lesson, Payment } from "@/types/lessons";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

interface User {
  id: string;
  login: string;
  percentage: number;
  name: string;
  password: string;
  lessons: Lesson[];
  payments: Payment[];
  role: string;
  price: number;
  status: string;
  subject: string;
  telegram: string;
  comment?: string;
}

const initialState = {
  value: {} as User,
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
