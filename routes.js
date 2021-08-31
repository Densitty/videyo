// Global Endpoints
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users endpoints
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos endpoints
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  // userDetail: USER_DETAIL, // id is needed to get user detail
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  // videoDetail: VIDEO_DETAIL,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: EDIT_VIDEO,
  upload: UPLOAD,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
