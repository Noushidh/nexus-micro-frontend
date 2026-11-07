import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null as {
      id: string;
      name: string;
      email: string;
    } | null,
    token: null as string | null,
  },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
