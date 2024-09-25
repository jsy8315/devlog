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

const preferTechWords = ["프론트엔드", "자바스크립트", "리액트", "UIUX"];
// 고려 사항 : preferTechWords에 추후 단어가 추가되거나 빠질 수 있음을 고려

let currentPreferTechWordsIndex = 0;

const typingSpeed = 100;
const deleteSpeed = 100;
const pauseTime = 2000;

const originHomeRole  = document.getElementsByClassName("home-role")[0].innerHTML;
let targetWord = originHomeRole.split("를")[0]; // 프론트엔드
let baseWord = originHomeRole.slice(-6); // 를 좋아하는

const homeRole = document.getElementsByClassName('home-role')[0];

function deleteEffect(word) {
    if (word.length > 0) {
        word = word.slice(0, -1);
        homeRole.textContent = word + baseWord;
        setTimeout(() => deleteEffect(word), deleteSpeed);
    } else {
        currentPreferTechWordsIndex++;
        if (currentPreferTechWordsIndex == 4) {
            currentPreferTechWordsIndex = 0;
        }
        setTimeout(typingEffect, 500);
    }
}

function typingEffect() {
    targetWord = preferTechWords[currentPreferTechWordsIndex];
    let typedWord = "";

    function letterEffect() {
        if (typedWord.length < targetWord.length) {
            typedWord += targetWord[typedWord.length];
            homeRole.textContent = typedWord + baseWord;
            setTimeout(letterEffect, typingSpeed);
        } else {
            setTimeout(() => deleteEffect(targetWord), 3000);

        }
    }

    letterEffect();

}

let startWord = "프론트엔드";
setTimeout(() => deleteEffect(startWord), 3000);

// section02로 화면이 내려가면(스크롤이 내려가면) header 색상 반전주기
window.addEventListener('scroll', function() {
    if (this.window.scrollY >= 700) {
        this.document.getElementsByClassName('header')[0].classList.add("header-white");
        this.document.getElementsByClassName('header-logo-span')[0].classList.add("header-logo-span-black");
        this.document.getElementsByClassName('header-nav')[0].classList.add("header-black");
    } else {
        this.document.getElementsByClassName('header')[0].classList.remove("header-white");
        this.document.getElementsByClassName('header-logo-span')[0].classList.remove("header-logo-span-black");
        this.document.getElementsByClassName('header-nav')[0].classList.remove("header-black");        
    }
})

