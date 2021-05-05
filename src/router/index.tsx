import { NextPageContext } from "next";
import { Component } from "react";
import ServeCookie from "next-cookies";
import { ServerResponse } from "node:http";
import Router from "next/router";

import { AuthToken, TOKEN_STORED_KEY } from "src/services/authToken";

export type AuthProps = {
  token: string;
}

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
    state = {
      auth: new AuthToken(this.props.token),
    };

    static async getInitialProps(ctx: NextPageContext) {
      const token = ServeCookie(ctx)[TOKEN_STORED_KEY];
      const auth = new AuthToken(token);

      if (auth.isExpired) redirectToLogin(ctx.res, "/user/login");

      const wrappedProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps({ auth }));
  
      return { ...wrappedProps, token };
    }

    componentDidMount(): void {
      this.setState({ auth: new AuthToken(this.props.token)});
    }

    render() {
      return <WrappedComponent {...this.state.auth}/>
    }
  }
}