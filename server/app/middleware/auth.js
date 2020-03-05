const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  console.log("sess", req.session.Authorization);
  console.log(req.header("Authorization"));
  const tok = req.header("Authorization");

  if (tok) {
    console.log(tok);
    const token = tok.replace("Bearer ", "");
    try {
      const data = jwt.verify(token, process.env.JWT_KEY);
      const user = await User.findOne({ _id: data._id, "tokens.token": token });
      if (!user) {
        throw new Error();
      }
      req.user = user;
      req.token = token;
      next();
    } catch (error) {
      res.status(401).send({ error: "Not authorized to access this resource" });
    }
  } else {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
