// 배경 바탕화면 영상 재생 & 일시정지 버튼
// 1. 시작스타일은 일시정지 이미지, 배경 영상 자동 재생 중
// 2. 누르면 재생 이미지로 변경, 배경 영상 멈춤
// 3. 다시 누르면 일시정지 이미지로 변경, 배경 영상 자동 재생, 반복. 

var bgVideoBtnCount = 0;

document.getElementsByClassName("bg-video-pause")[0].addEventListener('click', function(e){
    e.preventDefault();

    bgVideoBtnCount += 1;

    if ( bgVideoBtnCount % 2 == 1 ) {
        document.getElementsByClassName('bg-video-content')[0].pause();
        document.getElementsByClassName('bg-video-pause-btn')[0].classList.add('hide-bg-video-pause-btn');
        document.getElementsByClassName('bg-video-pause-btn')[0].classList.remove('show-bg-video-pause-btn');
        document.getElementsByClassName('bg-video-play-btn')[0].classList.add('show-bg-video-play-btn');
        document.getElementsByClassName('bg-video-play-btn')[0].classList.remove('hide-bg-video-play-btn');
        
    } else {
        document.getElementsByClassName('bg-video-content')[0].play();
        document.getElementsByClassName('bg-video-pause-btn')[0].classList.add('show-bg-video-pause-btn');
        document.getElementsByClassName('bg-video-pause-btn')[0].classList.remove('hide-bg-video-pause-btn');
        document.getElementsByClassName('bg-video-play-btn')[0].classList.add('hide-bg-video-play-btn');
        document.getElementsByClassName('bg-video-play-btn')[0].classList.remove('show-bg-video-play-btn');
    }
    
    console.log(bgVideoBtnCount);
})

//클릭시 intro-overlay로 가는 것 방지
// 클래스 내부 버튼에도 적용되는지 테스트
document.getElementsByClassName('testBtn')[0].addEventListener('click', function(e) {
    if (e.target == document.getElementsByClassName('testBtn')[0]) {
        console.log("Hi01");
    }
});

document.getElementsByClassName('testBtn')[1].addEventListener('click', function(e) {
    if (e.target == document.getElementsByClassName('testBtn')[1]) {
        console.log("Hi02");
    }
});

document.getElementsByClassName('main')[0].addEventListener('click', function(e) {
    e.preventDefault();
});

document.getElementsByClassName('footer')[0].addEventListener('click', function(e) {
    e.preventDefault();
});

// home-hi 큰 글자 > 작은 글자로 setTimeout 활용해서
// 1초 지나면 
// home-role, home-name 아래에서 위로 올라오는 효과 > 따로 함수 만들어서 적용
// sub-intro 

setTimeout(function(){
    document.getElementsByClassName("home-hi")[0].style.fontSize = "40px";
}, 1000);