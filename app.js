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

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// helmet middleware for security
app.use(helmet());
// logger middleware
app.use(morgan("dev"));
// parsing cookies
app.use(cookieParser());

// use the routers
// global router
app.use(routes.home, globalRouter);

// user routes and routers
app.use(routes.users, userRouter);
// video routes and routers
app.use(routes.videos, videoRouter);

export default app;
