const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("BPS server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
