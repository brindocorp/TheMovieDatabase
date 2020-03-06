import Router from "next/router";
import { setAuth } from "../redux/actions/auth";
import { getCookieFromServer } from "../utils/cookie";

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default async function(ctx) {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      let cookie = await getCookieFromServer("moviesBoxDatabase", ctx.req);

      let data = await ctx.store.dispatch(setAuth(cookie));

      return data;
    }
  } else {
    console.log(token);
    const token = ctx.store.getState().token;
    // ctx.store.dispatch(setAuth(token));
    if (token && (ctx.pathname === "signin/" || ctx.pathname === "/signup")) {
      setTimeout(function() {
        Router.push("/");
      }, 0);
    }
  }
}
