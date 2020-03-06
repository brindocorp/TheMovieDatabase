import cookie from "js-cookie";

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: "/"
    });
  }
};

export const getCookieFromServer = (key, req) => {
  try {
    if (!req.headers.cookie) {
      return undefined;
    }
    const rawCookie = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
      return undefined;
    }
    return rawCookie.split("=")[1];
  } catch (error) {}
};
// export async function getCookieFromServer(key, req) {
//   if (!req && !req.headers && !req.headers.cookie) return null;

//   var cookie = await req.headers.cookie
//     .split(";")
//     .find(c => c.trim().startsWith(`${key}=`));
//   // console.log(req.headers.cookie.moviesBoxDatabase);
//   if (cookie) {
//     console.log(cookie.split("=")[1]);
//     return cookie.split("=")[1];
//   }
// }
