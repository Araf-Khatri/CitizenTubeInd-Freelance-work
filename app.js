const sendMail = require("./backend/sendMail");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());

app.use("/send-mail", sendMail);

app.use(express.static("./frontend/build"));

const port = process.env.PORT || 4090;
app.listen(port, () => {
  console.log("app is running ", port);
});
