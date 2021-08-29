// const express = require("express");
import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  console.log("serving videos");
  res.send("<h1>Rush Hour</h1>");
});

app.get("/movie", (req, res) => {
  console.log("get the movie, firecrackers");
  res.send("<h1>Fiecrackers</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
