import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Router from "next/router";
import { TOKEN_LOGOUT_EVENT_KEY } from "src/router";

type DecodedTokenType = {
  email: string;
  exp: number;
}

export const TOKEN_STORED_KEY = "flowMoneyUserTokenKey";

export class AuthToken {
  readonly decodedToken: DecodedTokenType;

  constructor(readonly token: string) {
    this.decodedToken = { email: "", exp: 0 };

    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {
      console.log(e);
    }
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isValid(): boolean {
    return !this.isExpired;
  }

  static async storeToken(token: string) {
    Cookies.set(TOKEN_STORED_KEY, token, { expires: 3 });
    window.localStorage.setItem(TOKEN_STORED_KEY, token);

    await Router.push("/dashboard");
  }

  static async logout() {
    Cookies.remove(TOKEN_STORED_KEY);
    window.localStorage.removeItem(TOKEN_STORED_KEY);
    window.localStorage.setItem(TOKEN_LOGOUT_EVENT_KEY, Date.now().toString());

    await Router.push("/user/login");
  }

  static getStoragedToken(isBearerFormat: boolean) {
    return isBearerFormat 
      ? `Bearer ${window.localStorage.getItem(TOKEN_STORED_KEY)}`
      : window.localStorage.getItem(TOKEN_STORED_KEY);
  }
}