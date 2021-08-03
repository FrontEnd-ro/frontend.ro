import UserController from "./user.controller";
import { PrivateMiddleware } from "../Middlewares";
import express from "express";

const userRouter = express.Router();

userRouter.get("/check-username/:username", UserController.checkUsername);

userRouter.get("/ping", UserController.pingCurrentuser);

userRouter.post("/login", UserController.login);

userRouter.post("/logout", UserController.logout);

userRouter.post("/register", UserController.register);

userRouter.post("/name", PrivateMiddleware, UserController.updateName);

userRouter.post(
  "/description",
  PrivateMiddleware,
  UserController.updateDescription
);

userRouter.post("/username", PrivateMiddleware, UserController.updateUsername);

userRouter.post("/email", PrivateMiddleware, UserController.updateEmail);

userRouter.post("/password", PrivateMiddleware, UserController.updatePassword);

userRouter.post("/avatar", PrivateMiddleware, UserController.uploadAvatar);

userRouter.post("/subscribe", UserController.subscribe);

userRouter.delete("/", PrivateMiddleware, UserController.deleteAccount);

export default userRouter;
