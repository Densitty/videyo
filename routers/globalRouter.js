import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => {
  res.send("<h1>Rush Hour</h1>");
});
globalRouter.get(routes.join, (req, res) => {
  res.send("<h1>Join Videyo</h1>");
});
globalRouter.get(routes.search, (req, res) => {
  res.send("<h1>Search Videos</h1>");
});
globalRouter.get(routes.login, (req, res) => {
  res.send("<h1>Login</h1>");
});
globalRouter.get(routes.logout, (req, res) => {
  res.send("<h1>Logout</h1>");
});

globalRouter.get(routes.videos, (req, res) => {
  res.send("<h2>All Videos</h2>");
});

globalRouter.get(routes.users, (req, res) => {
  res.send("<h2>All Users</h2>");
});

export default globalRouter;
