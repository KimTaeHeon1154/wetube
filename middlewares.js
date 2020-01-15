import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes; //routes.js 파일을 routes변수에 저장, 이 변수를 글로벌하게 사용가능 -> pug파일에서도 자유롭게 사용 가능!
    next();
};
// siteName이라는 변수를 만들고, 이를 글로벌하게 사용가능하게 함