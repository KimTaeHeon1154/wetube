// videoPlayer.pug파일과 연관. 비디오 플레이어의 음량, play/pause/ 전체화면 등의 기능들을 구현하는 js파일


const videoContainer = document.getElementById("jsVideoPlayer"); //videoPlayer.pug 파일의 #jsVideoPlayer 부분

const videoPlayer = document.querySelector("#jsVideoPlayer video");
// 위의 형식을 써서 videoPlayer 변수를 선언하면, 다른 어떤 함수에서든 그 함수 안에서 videoPlayer 변수를 사용할 수 있다.
const playBtn = document.getElementById("jsPlayButton");
// videoPlayer.pug파일의 play 버튼에 아이디를 지정하고, 해당 아이디를 playBtn변수에 할당해준 것.
const volumeBtn = document.getElementById("jsVolumeBtn");

// play,pause 기능과 관련된 함수
function handlePlayClick() {
    // 정지상태였다면, play하고 / 아니면 정지한다.
    if (videoPlayer.paused) {
        videoPlayer.play();
        // innerHTML으로, playBtn부분을 바꿀 수 있는데, 이 부분은 document.getElementById로 인해 videoPlayer.pug의 #jsPlayButton부분과 연결되어 있다.
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// mute, unmute 기능과 관련된 함수
function handleVolumeClick() {
    if (videoPlayer.muted) {
        // HTMLMediaElement 공식문서를 보면, muted 프로퍼티는 Read Only가 아니므로, 아래의 방식처럼 오버라이드가 가능하다. false, true로 조작 가능하다.
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}


function init() {
    // 클릭을 하면, handlePlayClick 함수를 실행하겠다.
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
}

// videoContainer에서만 init()함수 실행할 수 있게
if (videoContainer) {
    init();
}