const express = require("express");
const router = express.Router();
const dbTypes = require("../schemas/types");

router.post("/login", async (request, response) => {
  dbTypes.user.getAuthenticated(
    request.body.username,
    request.body.password,
    (error, user, reason) => {
      if (error) throw error;

      if (user)
        response.json({
          status: true,
          message: "Login succesvol",
          id: user._id,
          firstTime: user.firstTime,
          nicename: user.nicename,
          subscription: user.subscription,
          fontSize: user.fontSize,
        });

      const reasons = dbTypes.user.failedLogin;

      switch (reason) {
        case reasons.NOT_FOUND:
          response.json({
            status: false,
            message: "Gebruikersnaam en / of wachtwoord incorrect",
          });
          break;
        case reasons.PASSWORD_INCORRECT:
          response.json({
            status: false,
            message: "Gebruikersnaam en / of wachtwoord incorrect",
          });
          break;
        case reasons.MAX_ATTEMPTS:
          response.json({
            status: false,
            message: "Maximaal aantal logins bereikt, probeer straks nog eens",
          });
          break;
      }
    }
  );
});

module.exports = router;
