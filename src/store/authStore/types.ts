export type AuthState = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};
