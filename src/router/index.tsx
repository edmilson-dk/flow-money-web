import { NextPageContext } from "next";
import { Component } from "react";
import ServeCookie from "next-cookies";
import { ServerResponse } from "node:http";
import Router from "next/router";

import { AuthToken, TOKEN_STORED_KEY } from "src/services/authToken";
import { BalanceContextProvider } from "src/contexts/BalanceContext";

export type AuthProps = {
  token: string;
}

export const TOKEN_LOGOUT_EVENT_KEY = "logoutFlowEvent";

function redirectToLogin(server: ServerResponse, redirectRoute: string) {
 if (server) {
    server.writeHead(302, {
      Location: redirectRoute
    });
    server.end();
  } else {
    Router.push(redirectRoute);
  }
}

export function PrivateRouter(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    state = {
      auth: new AuthToken(this.props.token),
    };

    static async getInitialProps(ctx: NextPageContext) {
      const token = ServeCookie(ctx)[TOKEN_STORED_KEY];
      const auth = new AuthToken(token);

      if (auth.isExpired) redirectToLogin(ctx.res, "/user/login");

      const wrappedProps = WrappedComponent.getStaticProps && (await WrappedComponent.getStaticProps({ auth }));
  
      return { ...wrappedProps, token };
    }

    syncLogout(event) {
      if (event.key === TOKEN_LOGOUT_EVENT_KEY) {
        Router.push("/user/login");
      }
    }

    componentDidMount(): void {
      window.addEventListener("storage", this.syncLogout);
      this.setState({ auth: new AuthToken(this.props.token)});
    }

    componentWillUnmount() {
      window.removeEventListener("storage", this.syncLogout);
      window.localStorage.removeItem(TOKEN_LOGOUT_EVENT_KEY);
    }

    render() {
      return (
        <BalanceContextProvider>
          <WrappedComponent {...this.state }/>
        </BalanceContextProvider>
      );
    }
  }
}