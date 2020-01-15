//video 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, videoRouter.js에 있는 함수들에 들어간다.

export const home = (req, res) => res.render("home"); //render함수를 쓰면, views 폴더의 home.pug파일을 찾아서 해당 html을 보여준다!!!
export const search = (req, res) => res.render("search");

export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");