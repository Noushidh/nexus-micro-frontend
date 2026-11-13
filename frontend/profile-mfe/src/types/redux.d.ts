export interface RootState {
  auth: {
    user: {
      id: string;
      name: string;
      email: string;
    } | null;

    token: string | null;
  };
}