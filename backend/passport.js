const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const GOOGLE_CLIENT_ID =
  "607252867022-2e0o6pmipank60g5h6gm32o9penf3ahr.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "acfbe2dac78e25d0e90e";
const GITHUB_CLIENT_SECRET = "b9f69b789f88a0f431ad2936b5670d6daa5ca198";

const FACEBOOK_CLIENT_ID = "471537267815964";
const FACEBOOK_CLIENT_SECRET = "85627ffbaf42ca9a9741640953ea26a4";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
