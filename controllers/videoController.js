import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", {
    pageTitle: "Home",
    videos,
  });
};

export const search = (req, res) => {
  const searchingBy = req.query.term;
  res.render("search", {
    pageTitle: "Search",
    searchingBy,
    videos,
  });
};

export const videoDetail = (req, res) => {
  res.render("videoDetail", {
    pageTitle: "Video Detail",
  });
};

export const editVideo = (req, res) => {
  res.render("editVideo", {
    pageTitle: "Edit Video",
  });
  // res.send("Edit video");
};

/* Upload functionality */
export const getUploadVideo = (req, res) => {
  res.render("upload", {
    pageTitle: "Upload Video",
  });
};

export const postUploadVideo = (req, res) => {
  // on posting the video, get the name of the videos
  const { fileName, title, description } = req.body;
  // then upload and save the videos to db and redirect user to the newly uploadled video page
  res.redirect(routes.videoDetail(234));
};
/* Upload functionality ends */

export const deleteVideo = (req, res) => {
  res.render("deleteVideo", {
    pageTitle: "Delete Video",
  });
};
