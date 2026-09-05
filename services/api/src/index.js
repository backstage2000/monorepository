const express = require("express");
const { findUser } = require("@mono/db");

const app = express();

app.get("/user/:id", (req, res) => {
  const user = findUser(Number(req.params.id));
  if (!user) return res.status(404).json({ er: "not found user" });

  res.status(200).json(user);
});

app.listen(3131, () => {
  console.log("api on http://localhost:3000");
});
