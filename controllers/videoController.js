//video 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, videoRouter.js에 있는 함수들에 들어간다.

export const home = (req, res) => res.render("home", { pageTitle: "Home" }); //render함수를 쓰면, views 폴더의 home.pug파일을 찾아서 해당 html을 보여준다!!!
// 두번째 객체인 {}안의 내용 보면, pageTitle 변수에 저장할 수 있다. 이 변수는 home.pug에서만 global하게 쓰이는 변수이다. (각 템플릿마다 이렇게 전역적 변수를 설정해줄 수 있다.)
export const search = (req, res) => res.render("search", { pageTitle: "Search" });
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });