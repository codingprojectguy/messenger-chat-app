const express = require("express");
const app = express();
const dotenv = require("dotenv");

const databaseConnect = require("./config/database");

dotenv.config({
  path: "backend/config/config.env",
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("This is the backend!");
});
databaseConnect();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
