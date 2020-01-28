import multer from "multer";
import routes from "./routes";

// multer 이용하는 부분 (어느 경로(url)에 만들지)
const multerVideo = multer({ dest: "uploads/videos/" });


export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes; //routes.js 파일을 routes변수에 저장, 이 변수를 글로벌하게 사용가능 -> pug파일에서도 자유롭게 사용 가능!
    res.locals.user = req.user || null; //user 변수에 passport가 회원가입할 때 자동으로 req에 올려준 사용자정보들을 저장함/ 없으면 빈 object -> 이 변수들 역시 글로벌하게 사용 가능 (pug 파일에서도 읽어짐)
    next();
};
// 변수를 만들고, 이를 글로벌하게 사용가능하게 하는 미들웨어에 쓰이는 파일

// upload.pug에서 videoFile이 name인 부분과 연결. 하나씩만 업로드 가능
export const uploadVideo = multerVideo.single("videoFile");