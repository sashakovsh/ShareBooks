import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  authToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
  },
});

export const { setAuth, setAuthToken } = authSlice.actions;

export default authSlice.reducer;
