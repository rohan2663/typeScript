const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/" || req.url == "/index.html") {
    res.setHeader("Content-type", "text/html");
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        res.end("Error while requesting to server", err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/about" || req.url == "/about.html") {
    res.setHeader("Content-type", "text/html");
    fs.readFile("about.html", "utf-8", (err, data) => {
      if (err) {
        res.end("Error while requesting to server", err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/contact" || req.url == "/contact.html") {
    res.setHeader("Content-type", "text/html");
    fs.readFile("contact.html", "utf-8", (err, data) => {
      if (err) {
        res.end("Error while requesting to server", err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/style.css") {
    fs.readFile("style.css", "utf-8", (err, data) => {
      res.setHeader("Content-type", "text/css");
      if (err) {
        res.end("Error while requesting to server", err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/script.js") {
    fs.readFile("script.js", "utf-8", (err, data) => {
      res.setHeader("Content-type", "text/javascript");
      if (err) {
        res.end("Error while requesting to server", err);
      } else {
        res.end(data);
      }
    });
  } else {
    res.end();
  }
});
server.listen(3000, (err) => {
  if (err) {
    console.log("Error while starting the server : ", err);
  } else {
    console.log("Server started");
  }
});