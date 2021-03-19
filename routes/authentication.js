const User = require("../models/user");

module.exports = (router) => {
  router.post("/register", (req, res) => {
    console.log(req.body);
    if (!req.body.email) {
      res.json({ success: false, message: "You must provide an e-mail" });
    } else if (!req.body.username) {
      res.json({ success: false, message: "You must provide an username" });
    } else if (!req.body.password) {
      res.json({ success: false, message: "You must provide an password" });
    } else {
      let user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });

      user.save((err) => {
        if (err) {
          res.json({
            success: false,
            message: "Could not save user . Error:",
            err,
          });
        } else {
          res.json({ success: true, message: "User Saved" });
        }
      });
    }
  });
  return router;
};
