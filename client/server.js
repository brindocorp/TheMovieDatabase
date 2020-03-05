const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const devProxy = {
  "/api": {
    target: "http://localhost:4000",
    pathRewrite: { "^/api": "/" },
    changeOrigin: true
  }
};
app.prepare().then(() => {
  const server = express();
  server.use(function(req, res, next) {
    // console.log(req);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  // Set up the proxy.
  if (dev && devProxy) {
    const proxyMiddleware = require("http-proxy-middleware");
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }
  server.use(bodyParser.json()); // support json encoded bodies
  server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  //   server.get("/profile/:username", (req, res) => {
  //     const actualPage = "/profile";
  //     return app.render(req, res, actualPage);
  //   });
  //   server.get("/profile/:username/:page", (req, res) => {
  //     let actualPage = "/profile";
  //     if (req.params.page === "profilesettings") {
  //       actualPage = "/profilesettings";
  //     }
  //     return app.render(req, res, actualPage);
  //   });
  //   server.get("/project/:projectId/edit", (req, res) => {
  //     const actualPage = "/projectedit";
  //     return app.render(req, res, actualPage);
  //   });
  server.all("*", (req, res) => {
    // console.log(req);
    return handle(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
