import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
//자식 디렉토리로 갈때는 ./를 쓴다.//

//express import한 걸 상수로 변환
const app = express();

//각종 middleware들 (순서 중요함)
app.use(helmet()); //보안 관련
app.set("view engine", "pug"); //원래는 view engine 따로 없는데, pug사용하기 위해 등록!
app.use("/uploads", express.static("uploads")); //디렉토리에서 파일을 보내주는 미들웨어 (middlewares.js 보면, multer의 dest가 uploads/videos인데, uploads라는 기본 url이 없으니까 둔 것!)
app.use("/static", express.static("static")); //static 폴더를 내 서버에 등록한 것.
app.use(cookieParser()); //쿠키 전달 관련
app.use(bodyParser.json()); //사용자 정보 전달한 거 검사 (예를들어, 회원가입 시 입력하는 정보들을 consol.log(req.body)하면 볼 수 있음)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); //application에서 일어나는 일 모두 logging

//local 변수들을 global하게 쓰기 위한 middleware
app.use(localsMiddleware); //middlewares.js에 있는 변수들을 사용하겠다

//Routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
//누군가 user에 들어가면, userRouter가 실행된다. 자세한 건 router.js의 userRouter보면 나오겠지//
app.use(routes.videos, videoRouter);
//routes.js에서 import해온 url들은 넣은 걸 볼 수 있다. routes.videos에서.//

export default app;
//다른 파일에서 import할때, app들어간 덩어리를 다 주겠다는 뜻//