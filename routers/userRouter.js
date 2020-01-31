//user 라우터 하위의 라우터 모음

import express from "express";
import routes from "../routes";
import { userDetail, getEditProfile, changePassword, postEditProfile } from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// 순서 중요

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
// routes.js 보면, userDetail을 함수로 만들었기 때문에, 괄호가 들어간다.
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;