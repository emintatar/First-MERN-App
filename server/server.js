const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3", "user4"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
