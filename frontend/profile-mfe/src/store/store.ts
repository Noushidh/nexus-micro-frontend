import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: {
      id: "1",
      name: "Guest User",
      email: "guest@example.com",
    } as {
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
