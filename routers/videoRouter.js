import express from "express";
import {
  deleteVideo,
  editVideo,
  getUploadVideo,
  postUploadVideo,
  videoDetail,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

/* Video upload routes */
videoRouter.get(routes.upload, getUploadVideo);
videoRouter.post(routes.upload, postUploadVideo);
/*---------------------*/

videoRouter.get(routes.editVideo, editVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
