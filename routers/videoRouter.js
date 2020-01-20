//video 라우터 하위 모음

import express from "express";
import routes from "../routes";
import { getUpload, postUpload, videoDetail, deleteVideo, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// 기본양식, 라우터파일.get(url, 함수명)
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// post에서, 비디오 업로드 하는 순간, uploadVideo 함수(middlewares.js에 있다)와 postUpload 함수 (videoController.js) 실행된다

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);


export default videoRouter;