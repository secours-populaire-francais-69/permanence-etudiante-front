export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  data: {
    refreshToken: null | string;
    token: string;
    type: string;
  };
}
