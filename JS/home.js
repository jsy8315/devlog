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

// a태그 제대로 닫아서 필요 없으므로 주석처리
// document.getElementsByClassName('main')[0].addEventListener('click', function(e) {
//     e.preventDefault();
// });

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

// Top버튼 스크롤시 나타나는 효과
window.addEventListener('scroll', function() {
    if (this.window.scrollY >= 100) {
        this.document.getElementsByClassName('topBtn-img')[0].classList.add("show-topBtn-img");
        this.document.getElementsByClassName('topBtn-img')[0].classList.remove("hide-topBtn-img");
    } else {
        this.document.getElementsByClassName('topBtn-img')[0].classList.remove("show-topBtn-img");
        this.document.getElementsByClassName('topBtn-img')[0].classList.add("hide-topBtn-img");
    }
})

// Top버튼 클릭 시 페이지 상단으로 한번에 이동
document.getElementsByClassName('topBtn')[0].addEventListener('click', function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})

// section02 요소 이동, 300부터 효과 시작 900에 종료
// aboutmeMain(왼 > 오), aboutmeGithub, aboutmeBlog, aboutmeResume (오 > 왼)
// 300부터 시작, 800까지 내려오면 완료
window.addEventListener('scroll', function() {
    let currentScrollY = this.window.scrollY;
    // console.log("currentScrollY : " + currentScrollY);

    let aboutmeMainX = -(1000 / 300) * currentScrollY + 2000;
    let aboutmeCardsX = -(1000 / 200) * currentScrollY + 4000;
    
    if (currentScrollY <= 300) {
        // 둘다 안보이게 처리
        document.getElementsByClassName("aboutmeMain")[0].style.right = 10000 + "px";
        document.getElementsByClassName("aboutmeCards")[0].style.left = 10000 + "px";
    } else if ( currentScrollY > 300 && currentScrollY <= 600 ) {
        document.getElementsByClassName("aboutmeMain")[0].style.right = aboutmeMainX + "px";
        document.getElementsByClassName("aboutmeCards")[0].style.left = 10000 + "px";
    } else if ( currentScrollY > 600 && currentScrollY <= 800 ) {
        // main은 right : 0으로 고정
        document.getElementsByClassName("aboutmeMain")[0].style.right = 0 + "px";
        document.getElementsByClassName("aboutmeCards")[0].style.left = aboutmeCardsX + "px";
    } else  {
        // 900이상
        document.getElementsByClassName("aboutmeMain")[0].style.right = 0 + "px";
        document.getElementsByClassName("aboutmeCards")[0].style.left = 0 + "px";
    }

    // console.log("aboutmeMainX : " + aboutmeMainX);

})

//Section03 스크롤에 따른 카드 뒤집기 효과
window.addEventListener('scroll', function() {
    let currentScrollYsection03 = this.window.scrollY;
    
    if (currentScrollYsection03 >= 1400) {
        document.getElementsByClassName("flipSkillsJavascript")[0].style.transform = "rotateY(180deg)"
        document.getElementsByClassName("flipSkillsReact")[0].style.transform = "rotateY(180deg)"
    } else {
        document.getElementsByClassName("flipSkillsJavascript")[0].style.transform = "rotateY(0deg)"
        document.getElementsByClassName("flipSkillsReact")[0].style.transform = "rotateY(0deg)"
    }

    if (currentScrollYsection03 >= 1600) {
        document.getElementsByClassName("flipSkillsHTML")[0].style.transform = "rotateY(180deg)"
        document.getElementsByClassName("flipSkillsTypescript")[0].style.transform = "rotateY(180deg)"
    } else {
        document.getElementsByClassName("flipSkillsHTML")[0].style.transform = "rotateY(0deg)"
        document.getElementsByClassName("flipSkillsTypescript")[0].style.transform = "rotateY(0deg)"
    }
})