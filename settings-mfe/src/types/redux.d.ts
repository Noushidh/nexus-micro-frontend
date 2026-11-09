export interface RootState {
  settings: {
    theme: "light" | "dark";
    notificationsEnabled: boolean;
  };
}