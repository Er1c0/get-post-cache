const express = require("express");
const app = express();

let count = 0;

app
  .get("/asdf", (req, res) => {
    count++;
    const msg = `count is ${count}`;
    console.log(msg);
    res
      .set("Access-Control-Allow-Origin", "*")
      .set("Cache-Control", "public, max-age=30")
      .send(msg);
  })
  .post("/asdf", (req, res) => {
    count++;
    const msg = `count is ${count}`;
    console.log(msg);
    res
      .set("Access-Control-Allow-Origin", "*")
      .set("Cache-Control", "public, max-age=30")
      .set("Content-Location", "http://localhost:3000/asdf")
      .set("Location", "http://localhost:3000/asdf")
      .status(201)
      .send(msg);
  })
  .set("etag", false)
  .disable("x-powered-by")
  .listen(30000, () => {
    console.log("Example app listening on port 3000!");
  });
