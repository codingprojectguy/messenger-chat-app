const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("This is the backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
