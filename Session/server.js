const express = require("express");
const app = express();
const fs = require("fs");
const cookieparser = require("cookie-parser");
const session = require("express-session");

app.use(cookieparser());
const oneday = 1000 * 60 * 60 * 24;
app.use(
  session({
    saveUninitialized: true,
    resave: false,
    secret: "abc@#123$%&rdfgj",
    cookie: { maxAge: oneday },
  })
);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/login", (req, res) => {
  if (req.session.username) {
    res.redirect("/dashboard");
  } else {
    res.sendFile(__dirname + "/public/login.html");
  }
});

app.get("/dashboard", (req, res) => {
  if (req.session.username) {
    res.sendFile(__dirname + "/public/dashboard.html");
  } else {
    res.redirect("/login");
  }
});

app.post("/login", (req, res) => {
  fs.readFile("users.txt", "utf-8", (err, data) => {
    let records = JSON.parse(data);
    let results = records.filter((item) => {
      if (
        item.username == req.body.username &&
        item.password == req.body.password
      ) {
        return true;
      }
    });
    if (results.length == 0) {
      res.send("Invalid username/password");
    } else {
      req.session.username = req.body.username;
      res.redirect("/dashboard");
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Error while starting the server ", err);
  } else {
    console.log("Server started");
  }
});