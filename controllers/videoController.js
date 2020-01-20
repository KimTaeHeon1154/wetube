//video 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, videoRouter.js에 있는 함수들에 들어간다.

import routes from "../routes";
import Video from "../models/Video";

//render함수를 쓰면, views 폴더의 home.pug파일(해당하는)을 찾아서 해당 html을 보여주고, export로 인해 해당 pug파일에 변수들을 전달해준다.!!!
export const home = async(req, res) => {
    // async & await => 한번에 두 내용 처리하지 않고, 하나 끝날때까지 기다리도록 함 (에러가 나도 끝난 것이기 때문에 다음 단계 실행이 됨 -> 에러를 잡지는 못함)
    // try 구문으로 에러난 경우는 에러 보여주도록!
    try {
        // models폴더의 Video.js에서 모든 동영상들을 가져와 보여주는 부분!! async와 await 때문에 이 과정이 끝나야 아래쪽의 render가 실행됨
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};
// 두번째 객체인 {}안의 내용 보면, pageTitle 변수에 저장할 수 있다. 이 변수는 home.pug에서만 global하게 쓰이는 변수이다. (각 템플릿마다 이렇게 전역적 변수를 설정해줄 수 있다.)

export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    // 위 코드의 의미는, searchingBy라는 변수에 req.query.term을 저장한 것과 같다. 뭔가 검색했을 때, url에 검색한 단어(term)이 뜨도록 해준다.
    res.render("search", { pageTitle: "Search", searchingBy, videos });
    // searchingBy, videos 변수도 search.pug에 전달함
};


// get은 url에 드러남. 그래서 렌더링만 해줌
// post에서 내부적으로 처리해야 할 것들 처리해주고, 업데이트하고, redirect로 마무리


export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async(req, res) => {
    const {
        body: { title, description },
        file: { path }
        // multer에 의해 path 변수에 해당 파일의 경로가 저장됨
    } = req;
    // newVideo라는 변수에 필요한 변수들 저장
    const newVideo = await Video.create({
        // models 폴더의 Video.js의 schema와 형태가 같기 때문에, 자동으로 mongoDB에 저장이 된다!!
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    // 업로드한 영상의 id 값을 통해 해당 비디오의 videoDetail로 redirect
    res.redirect(routes.videoDetail(newVideo.id));
}


// routes.js 참고하면, id 별로 다른 url을 가지게 할 수 있다.
// id별로 다른 비디오에 들어가기 위해서는, 아래의 양식처럼 id를 가지고 비디오를 찾고, 그에 맞는 비디오를 띄워주는 페이지로 들어가야 한다! (req.params.id / try catch 구문 사용)
export const videoDetail = async(req, res) => {
    const {
        params: { id }
    } = req;
    // routes.js에서 videoDetail보면, url로부터 id 변수를 받는다. 이 변수는 req.params.id이므로, 이를 위 코드로 적은 것이다
    try {
        const video = await Video.findById(id);
        // video 변수에, req.params.id를 가지고 동영상을 찾아서 저장
        res.render("videoDetail", { pageTitle: video.title, video });
        // 위에서 만든 video 변수 찾고나서, videoDetail.pug 템플릿에 전달
    } catch (error) {
        res.redirect(routes.home);
        // 에러가 뜨면, 에러 보고 home화면으로 redirect
    }
};

export const getEditVideo = async(req, res) => {
    // id에 해당하는 editVideo 페이지로 렌더링
    const {
        params: { id }
    } = req;
    try {
        // 비디오가 찾아지면, editVideo.pug html로 이동, 페이지 제목 아래처럼 + video 변수 전달
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        res.redirect(routes.home);
    };
    res.render("editVideo", { pageTitle: "Edit Video" });
};
export const postEditVideo = async(req, res) => {
    // 내용들에 대해 수정이 이루어지는 부분
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        // findOneAndUpdate 함수로, id를 찾고, title과 description을 업데이트 한다. / 수정을 하고 나서는 videoDetail로 redirect해서 수정 된 걸 확인한다!
        // 이런 류의 함수를 보려면, mongoosejs.com의 documents 중에 query 보면 됨
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};

export const deleteVideo = async(req, res) => {
    const {
        params: { id }
    } = req;
    try {
        // findOneAndRemove함수로, 해당 id 동영상을 DB에서 삭제한다
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {}
    res.redirect(routes.home)
};