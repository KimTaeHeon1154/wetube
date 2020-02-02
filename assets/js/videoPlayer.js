// videoPlayer.pug파일과 연관. 비디오 플레이어의 음량, play/pause/ 전체화면 등의 기능들을 구현하는 js파일


const videoContainer = document.getElementById("jsVideoPlayer"); //videoPlayer.pug 파일의 #jsVideoPlayer 부분

const videoPlayer = document.querySelector("#jsVideoPlayer video");
// 위의 형식을 써서 videoPlayer 변수를 선언하면, 다른 어떤 함수에서든 그 함수 안에서 videoPlayer 변수를 사용할 수 있다.
const playBtn = document.getElementById("jsPlayButton");
// videoPlayer.pug파일의 play 버튼에 아이디를 지정하고, 해당 아이디를 playBtn변수에 할당해준 것.

function handlePlayClick() {
    // 정지상태였다면, play하고 / 아니면 정지한다.
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

function init() {
    // 클릭을 하면, handlePlayClick 함수를 실행하겠다.
    playBtn.addEventListener("click", handlePlayClick);
}

// videoContainer에서만 init()함수 실행할 수 있게
if (videoContainer) {
    init();
}