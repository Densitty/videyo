import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail, (req, res) => {
  res.send("<h2>User Details</h2>");
});

userRouter.get(routes.editProfile, (req, res) => {
  res.send("<h2>User Edit</h2>");
});

userRouter.get(routes.changePassword, (req, res) => {
  res.send("<h2>User Change Password</h2>");
});

export default userRouter;
