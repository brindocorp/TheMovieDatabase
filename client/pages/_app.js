import React, { useState } from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import initStore from "../redux";
import withReduxStore from "../lib/with-redux-store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../public/scss/app.scss";
import { setAuth } from "../redux/actions/auth";
import initialize from "../utils/initialize";
import { connect } from "react-redux";
import { getCookieFromServer } from "../utils/cookie";

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      // await initialize(ctx);
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <div>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      );
    }
  }
);
// export default withReduxStore(withRedux);

// const MyApp = props => {
//   const { Component, pageProps, store } = props;
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };

// export default withRedux(initStore)(MyApp);
