export type UserLoginData = {
  email: string;
  password: string;
};

export type SignInSuccessResposne = {
  username: string;
};
export type SignInErrorResponse = {
  status: number;
  message: string;
};

export type onSignInSucces = (username: string | undefined) => void;
export type onSignInError = (error: SignInErrorResponse) => void;
