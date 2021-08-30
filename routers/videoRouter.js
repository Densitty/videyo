import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, (req, res) => {
  res.send("<h2>Video Detail</h2>");
});

videoRouter.get(routes.editVideo, (req, res) => {
  res.send("<h2>Edit Video</h2>");
});

videoRouter.get(routes.upload, (req, res) => {
  res.send("<h2>Upload Video</h2>");
});

videoRouter.get(routes.deleteVideo, (req, res) => {
  res.send("<h2>Delete Video</h2>");
});

export default videoRouter;
