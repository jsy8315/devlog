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
    document.getElementsByClassName("home-hi")[0].classList.add("show-home-hi");
}, 800);

setTimeout(function(){
    document.getElementsByClassName("home-role")[0].classList.add("show-home-name");
}, 1500);

setTimeout(function(){
    document.getElementsByClassName("home-name")[0].classList.add("show-home-role");
}, 1700);

setTimeout(function(){
    document.getElementsByClassName("sub-intro")[0].classList.add("show-sub-intro");
}, 2000);

setTimeout(function(){
    document.getElementsByClassName("aboutme")[0].classList.add("show-aboutme");
}, 2000);

// "000를 좋아하는" 타이핑 효과(반복),  000 > 프론트엔드(기본), Javascript, React

const preferTechWords = ["자바스크립트", "리액트", "UIUX", "프론트엔드"];
// 고려 사항 : preferTechWords에 추후 단어가 추가되거나 빠질 수 있음을 고려

const typingSpeed = 100;
const deleteSpeed = 1000;
const pauseTime = 2000;

const originHomeRole  = document.getElementsByClassName("home-role")[0].innerHTML;
let targetWord = originHomeRole.split("를")[0]; // 프론트엔드
let baseWord = originHomeRole.slice(-6); // 를 좋아하는

const homeRole = document.getElementsByClassName('home-role')[0];


// 글자가 한글자씩 지워지고 > 
// 다 지워진것 확인되면 (6글자, "를 좋아하는") > (앞에와 뒤에를 구분하면 편할 듯)
// 한글자씩 타이핑 > 
// 타이핑 완료
// 2초간 보여주가
// 위 과정 반복 > while문 써야할듯, preferTechWords에서 무한반복해야되니...



function typingEffect() {
    // for문으로 무한반복을 돌릴까? >> 마지막일떄 i = 0으로 처리하니 과부하가 걸리는디
    for( let i = 0; i < preferTechWords.length; i++) {
        if (preferTechWords[i] != targetWord) {
            targetWord = targetWord.slice(0, -1);
            setTimeout(()=>
                homeRole.textContent = targetWord + baseWord, deleteSpeed); // 프론트엔
            
            console.log(targetWord);
            console.log(baseWord);
        } 
    }
}

setTimeout(typingEffect, 2500);



