const http = require("http");
const fs = require("fs");
const port = 3030;
const server = http.createServer((req, res) => {
    const method = req.method;
  if (method=="GET" && req.url == "/about") {
    res.setHeader("Content-Type", "text/html");       //text/css     application/javascript
    let data = fs.readFileSync("./view/about.html", "utf-8");
    res.write(data);
    res.end();
  } else if (method=="GET" && req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    let data = fs.readFileSync("./view/home.html", "utf-8");
    res.write(data);
    res.end();
  } else if (method=="GET" && req.url == "/contact") {
    res.setHeader("Content-Type", "text/html");
    let data = fs.readFileSync("./view/contact.html", "utf-8");
    res.write(data);
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<b>Page Not Found</b>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server started at PORT ${port}`);
});