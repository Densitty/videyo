import routes from "../routes";

export const getJoin = (req, res) => {
  console.log(req.body);
  res.render("join", {
    pageTitle: "Signup",
  });
};

export const postJoin = (req, res) => {
  console.log(req.body);
  const { name, email, password, password2 } = req.body;

  if (password !== password2) {
    res.status(400);
    res.render("join", {
      pageTitle: "Signup",
    });
  } else {
    // on successful registration, register user, log user in and redirect to home
    res.redirect(routes.home);
  }
};

/*---- login functionality ----*/
export const getLogin = (req, res) => {
  res.render("login", {
    pageTitle: "Login",
  });
};

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
/*---- login functionality ends ----*/

export const logout = (req, res) => {
  // process logout by redirecting to home
  res.redirect(routes.home);
};

export const userDetail = (req, res) => {
  res.render("userDetail", {
    pageTitle: "User Details",
  });
};

export const editProfile = (req, res) => {
  res.render("editProfile", {
    pageTitle: "Edit Profile",
  });
};

export const changePassword = (req, res) => {
  res.render("changePassword", {
    pageTitle: "Change Password",
  });
};
