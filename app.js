// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

// helmet middleware for security
// app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      mediaSrc: ["'self'", "https://media.gettyimages.com/"],
      scriptSrc: [
        "'self'",
        "maxcdn.bootstrapcdn.com",
        "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js",
      ],
      styleSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
      ],
      fontSrc: [
        "'self'",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/",
      ],
    },
  })
);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(morgan("dev"));
// parsing cookies
app.use(cookieParser());

// set the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//  locals middleware - locals is for getting the variables
app.use(localsMiddleware);

// use the routers
// global router
app.use(routes.home, globalRouter);

// user routes and routers
app.use(routes.users, userRouter);
// video routes and routers
app.use(routes.videos, videoRouter);

export default app;
