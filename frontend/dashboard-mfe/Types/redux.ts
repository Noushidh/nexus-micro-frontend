export interface AuthState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;

  token: string | null;
}

export interface SettingsState {
  theme: "light" | "dark";
  notificationsEnabled: boolean;
}

export interface RootState {
  auth: AuthState;
  settings: SettingsState;
}
