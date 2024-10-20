const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dest = __dirname + "/files/Misc";
    const ext = file.mimetype.split("/")[1];

    if (ext === "jpg" || ext === "jpeg") {
      dest = __dirname + "/files/images";
    } else if (ext === "pdf") {
      dest = __dirname + "/files/pdf";
    }

    cb(null, dest);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "." + file.mimetype.split("/")[1]);
  },
});

const filter = (req, file, cb) => {
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: filter,
  limits: { fileSize: 1024 * 1024 * 4 },
});

app.get("/upload", (req, res) => {
  res.sendFile(__dirname + "/upload.html");
});

app.post("/upload", upload.array("files", 10), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  res.send("UPLOADED !!");
});

app.listen(1000, () => console.log("started"));