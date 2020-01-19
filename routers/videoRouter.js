//video 라우터 하위 모음

import express from "express";
import routes from "../routes";
import { videos, getUpload, postUpload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// post에서, 비디오 업로드 하는 순간, uploadVideo 함수(middlewares.js에 있다)와 postUpload 함수 (videoController.js) 실행된다

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);


export default videoRouter;