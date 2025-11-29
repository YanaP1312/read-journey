export interface User {
  _id?: string;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}

type NullableUser = {
  _id: null;
  name: null;
  email: null;
  token: null;
  refreshToken: null;
};

export type RefreshResponse = Pick<User, "token" | "refreshToken">;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthState {
  user: User | NullableUser;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}
