//가장 기본인 곳에서 시작하는 라우터 모음
import express from "express";
import passport from "passport";
import routes from "../routes";
import { onlyPublic, onlyPrivate } from "../middlewares";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, getLogin, logout, postLogin, githubLogin, postGithubLogIn } from "../controllers/userController";
//../을 쓰면 부모디렉토리로 나갈 수 있다//

const globalRouter = express.Router();

//아래의 방식으로 각 페이지에 띄울 파일이나 함수 정한다.
//함수부분 보면, 각 Controller.js에 있는 함수들 가져온건데, vscode의 Auto import 기능을 사용한 것이다.
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, githubLogin);
// github로 로그인하러가면, userController.js의 githubLogin함수가 실행됨. (깃허브로 인증)

globalRouter.get(routes.githubCallback, passport.authenticate("github", { failureRedirect: "/login" }), postGithubLogIn)
    // github에서 다시 우리 사이트로 돌아올 때, 로그인이 성공적인지 판단해서 성공적이면 postGithubLogin 함수 실행 (홈화면으로 send)

export default globalRouter;