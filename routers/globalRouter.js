import express from "express";
import {
  getJoin,
  postJoin,
  login,
  logout,
  postLogin,
  getLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

// sign up routes
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
// login routes
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

// home route
globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, logout);

export default globalRouter;
