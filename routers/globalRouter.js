//가장 기본인 곳에서 시작하는 라우터 모음
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, getLogin, logout, postLogin } from "../controllers/userController";
//../을 쓰면 부모디렉토리로 나갈 수 있다//

const globalRouter = express.Router();

//아래의 방식으로 각 페이지에 띄울 파일이나 함수 정한다.
//함수부분 보면, 각 Controller.js에 있는 함수들 가져온건데, vscode의 Auto import 기능을 사용한 것이다.
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;