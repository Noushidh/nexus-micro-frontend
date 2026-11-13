export interface RootState {
  settings: {
    theme: "light" | "dark";
    notificationsEnabled: boolean;
  };
}

export interface AppDispatch {
  <T>(action: T): T;
}