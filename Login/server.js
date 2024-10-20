const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  // console.log(req.body);
  // res.send("Welcome "+req.body.username);
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
      res.send("Welcome " + req.body.username);
    }
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Unable to start server");
  } else {
    console.log("Server Started");
  }
});
