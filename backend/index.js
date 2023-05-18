const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./passport");
const authRoute = require("./routes/auth");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["sli"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.listen("5000", () => {
  console.log("Server is running!");
});
app.use("/auth", authRoute);
