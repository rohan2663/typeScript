const express = require("express");
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({extended:false}))

// app.get("/",(req,res)=>{
//     //res.send("Welcome to express server");
//     res.sendFile(__dirname + "/home.html");
// })
// app.get("/index.html", (req, res) => {
//     //res.send("Index Page");
//     res.sendFile(__dirname+ "/index.html");
// });
// app.get("/about.html", (req, res) => {
//   res.sendFile(__dirname + "/about.html");
// });
// app.get("/contact.html", (req, res) => {
//   res.sendFile(__dirname + "/contact.html");
// });
// app.get("*",(req,res)=>{
//    res.status(404).send("Page Not Found");
// })
// app.get("/getdata",(req,res)=>{
//     //console.log(req.query);
//     res.send("Welcome "+req.query.yourname);
// })
app.post("/getdata",(req,res)=>{
    console.log(req.body);
    res.send("Welcome "+req.body.yourname);
})

app.listen(3000,(err)=>{
    console.log("Server Started");
})