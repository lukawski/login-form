import {
  UserLoginData,
  SignInErrorResponse,
  SignInSuccessResposne,
} from "../types";

export default async function signIn(
  credentials: UserLoginData
): Promise<[SignInErrorResponse | null, SignInSuccessResposne | null]> {
  try {
    const response = await fetch(
      "http://www.mocky.io/v2/5ed56f1a340000540006d2ba"
    );
    const json = await response.json();

    return [null, json];
  } catch (e) {
    return [
      {
        status: 401,
        message:
          "The email/password combination used was not found on the system.",
      },
      null,
    ];
  }
}
