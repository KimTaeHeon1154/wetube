//user 라우터 하위의 라우터 모음

import express from "express";
import routes from "../routes";
import { userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

// 순서 중요

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
// routes.js 보면, userDetail을 함수로 만들었기 때문에, 괄호가 들어간다.
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;