import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

/* editProfile should come first so dt d server won't confuse the path with getting an id instead of a route (/edit-profile & /:id) */
userRouter.get(routes.editProfile, editProfile);

userRouter.get(routes.changePassword, changePassword);

// any routes with /:id should come last due to above line 11 comment
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
