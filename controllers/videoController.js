//video 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, videoRouter.js에 있는 함수들에 들어간다.

import { videos } from "../db"

//render함수를 쓰면, views 폴더의 home.pug파일(해당하는)을 찾아서 해당 html을 보여주고, export로 인해 해당 pug파일에 변수들을 전달해준다.!!!
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
    //home.pug 실행할 때, db.js에서 import한 videos array도 전달한다.
};
// 두번째 객체인 {}안의 내용 보면, pageTitle 변수에 저장할 수 있다. 이 변수는 home.pug에서만 global하게 쓰이는 변수이다. (각 템플릿마다 이렇게 전역적 변수를 설정해줄 수 있다.)

export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    // 위 코드의 의미는, searchingBy라는 변수에 req.query.term을 저장한 것과 같다. 뭔가 검색했을 때, url에 검색한 단어(term)이 뜨도록 해준다.
    res.render("search", { pageTitle: "Search", searchingBy });
    // searchingBy 변수도 전달함
};

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });