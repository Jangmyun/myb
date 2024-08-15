const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Test" });
});

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
