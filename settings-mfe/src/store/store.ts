import { configureStore, createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    theme: "light" as "light" | "dark",
    notificationsEnabled: true,
  },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },
});