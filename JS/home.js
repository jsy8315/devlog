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
    document.getElementsByClassName("home-role")[0].classList.add("show-home-role");
}, 1500);

setTimeout(function(){
    document.getElementsByClassName("home-name")[0].classList.add("show-home-name");
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

// aboutme 클릭 시 이동
document.getElementsByClassName('aboutme')[0].addEventListener('click', function(){
    window.scrollTo({
        left: 0,
        top: 800,
        behavior: "smooth"
    })
})

// Navbar 로고 클릭 시 새로고침
document.getElementsByClassName('header-logo')[0].addEventListener('click', function(e) {
    history.go();
})

// Navber 요소 클릭시 스크롤
document.getElementsByClassName('Home')[0].addEventListener('click', function(e) {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})

document.getElementsByClassName('AboutMe')[0].addEventListener('click', function(e) {
    window.scrollTo({
        left: 0,
        top: 800,
        behavior: "smooth"
    })
})

document.getElementsByClassName('Skills')[0].addEventListener('click', function(e) {
    window.scrollTo({
        left: 0,
        top: 1850,
        behavior: "smooth"
    })
})

document.getElementsByClassName('Projects')[0].addEventListener('click', function(e) {
    window.scrollTo({
        left: 0,
        top: 2750,
        behavior: "smooth"
    })
})

document.getElementsByClassName('Career')[0].addEventListener('click', function(e) {
    window.scrollTo({
        left: 0,
        top: 5050,
        behavior: "smooth"
    })
})

document.getElementsByClassName('Devlog')[0].addEventListener('click', function(e) {
    alert("준비 중입니다!")
})
// Top버튼 스크롤시 나타나는 효과
window.addEventListener('scroll', function() {
    if (this.window.scrollY >= 200) {
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

// section02 > aboutmeMain 글자 확대 & 색 조정
window.addEventListener('scroll', function() {
    const aboutmeMain = document.getElementsByClassName('aboutmeMain')[0]; //aboutmeMain가져오기
    const windowHeight = window.innerHeight; // 네비게이션 창을 제외한 높이
    let scalingAboutmeMain = this.document.getElementsByClassName('aboutmeMain-contents')[0];
    let colorAboutmeMain = this.document.getElementsByClassName('aboutmeMain-contents')[0];
    let aboutmeCards = document.getElementsByClassName('aboutmeCards')[0];
    let skillsCard = document.getElementsByClassName('skillsCard')[0];


    scrollYBiggerEffect(windowHeight, aboutmeMain, scalingAboutmeMain);
    scrollYColorEffect(windowHeight, aboutmeMain, colorAboutmeMain);
    scrollYEleUpEffect(0.1, aboutmeCards);
    scrollYEleUpEffect(0.1, skillsCard);

})

// 요소 가운데가 화면 밑부분에 도달 : 효과 시작
// 요소 border-bottm이 화면 밑부분에 도달 : 효과 종료
// 87이동시 scale 0.5 -> 1.0 변화
// aboutmeMainCenter가 windowsHeight와 같아지는 시점부터 변화 시작해서              scale 0.5
// aboutmeMainCenter가 windowsHeight - aboutmeMainRect.height와 같아지는 시점에서 끝남  scale 1.0
function scrollYBiggerEffect(windowHeight, element, scalingElement) {
    const elementRect = element.getBoundingClientRect(); //요소길이 측정
    const elementCenter = elementRect.top + ( elementRect.height / 2) // 네비게이션 ~ 요소 가운데 거리
    let scaleValue =  -1 / ( elementRect.height ) * (elementCenter  - windowHeight) + 0.5;

    if (windowHeight <= elementCenter ) {
        // console.log("메인 절반도달 전")
        scalingElement.style.transform = `scale(${scaleValue})`;
    } else if (elementCenter + (elementRect.height / 2) >= windowHeight && elementCenter <= windowHeight) {
        // console.log("메인 절반 ~ 메인 끝 사이");
        scalingElement.style.transform = `scale(${scaleValue})`;

    }
    else if ( elementCenter + (elementRect.height / 2) < windowHeight) {
        // console.log("메인 바깥")
        scalingElement.style.transform = `scale(1.0)`;

    }
}

// 스크롤에 따른 글자 색 변화 효과 함수 opacity 0 -> 1
function scrollYColorEffect(windowHeight, element, colorElement){
    const elementRect = element.getBoundingClientRect(); //요소길이 측정
    const elementCenter = elementRect.top + ( elementRect.height / 2) // 네비게이션 ~ 요소 가운데 거리
    let colorValue =  -1 / ( elementRect.height ) * (elementCenter  - windowHeight) + 0.5;

    if (windowHeight <= elementCenter ) {
        colorElement.style.opacity = `${colorValue}`;
    } else if (elementCenter + (elementRect.height / 2) >= windowHeight && elementCenter <= windowHeight) {
        colorElement.style.opacity = `${colorValue}`;

    }
    else if ( elementCenter + (elementRect.height / 2) < windowHeight) {
        colorElement.style.opacity = `1.0`;

    }
}

// 스크롤에 따른 요소 올라오는 효과 && opacity 효과
function scrollYEleUpEffect(n, elementClass){
    // n은 요소의 몇퍼센트트가 아래에 있다 위로 올라올 지 정하는 파라미터
    const windowHeight = window.innerHeight; // 네비게이션 창을 제외한 높이
    const elementClassRect = elementClass.getBoundingClientRect(); //요소길이 측정
    const elementCenter = elementClassRect.top + ( elementClassRect.height / 2) // 네비게이션 ~ 요소 가운데 거리
    // 요소 길이의 10%
    const elementN = elementClassRect.height  * n;

    let colorValue =  -1 / ( elementClassRect.height ) * (elementCenter  - windowHeight) + 0.5;
    let topValue = ( elementN / (elementClassRect.height / 2)) * ( elementCenter - windowHeight );

    if (windowHeight <= elementCenter ) { // 요소 절반 도달 전
        elementClass.style.opacity = `${colorValue}`;
        elementClass.style.top = topValue + 'px';
        // console.log("windowHeight : " + windowHeight);
        // console.log("elementClass.style.top : " + elementClass.style.top);
        // console.log("elementCenter : " + elementCenter)
        // console.log("elementClassRect.height : " + elementClassRect.height)
    } 
    // 요소 절반 ~ 요소 바깥 전
    else if (elementCenter + (elementClassRect.height / 2) >= windowHeight && elementCenter <= windowHeight) {
        elementClass.style.opacity = `${colorValue}`;
        elementClass.style.top = 0;
        // console.log(elementClass.style.top);

    }
    else if ( elementCenter + (elementClassRect.height / 2) < windowHeight) { // 요소 바깥
        elementClass.style.opacity = `1.0`;
        elementClass.style.top = 0;
        // console.log(elementClass.style.top);

    }
}

// 클릭시 특정 사이로 이동
function clickToSite(element, siteAddr){
    let elementClass = document.getElementsByClassName(`${element}`)[0];
    elementClass.addEventListener('click', function(){
        window.open(`${siteAddr}`);
    })
}

clickToSite('aboutmeGithubFront', 'https://github.com/jsy8315');
clickToSite('aboutmeBlogFront', 'https://blog.naver.com/tdhitbtd2023');



// 포트폴리오Pdf 만들기 전까지 임시 alerts
function temporalClickToSite(){
    document.getElementsByClassName('aboutmeResumeFront')[0].addEventListener('click', function(){
        alert('준비 중입니다!')
    })
}

temporalClickToSite();

// section02 요소 이동, 300부터 효과 시작 900에 종료
// aboutmeMain(왼 > 오), aboutmeGithub, aboutmeBlog, aboutmeResume (오 > 왼)
// 300부터 시작, 800까지 내려오면 완료
// window.addEventListener('scroll', function() {
//     let currentScrollY = this.window.scrollY;
//     // console.log("currentScrollY : " + currentScrollY);

//     let aboutmeMainX = -(1000 / 300) * currentScrollY + 2000;
//     let aboutmeCardsX = -(1000 / 200) * currentScrollY + 4000;
    
//     if (currentScrollY <= 300) {
//         // 둘다 안보이게 처리
//         document.getElementsByClassName("aboutmeMain")[0].style.right = 10000 + "px";
//         document.getElementsByClassName("aboutmeCards")[0].style.left = 10000 + "px";
//     } else if ( currentScrollY > 300 && currentScrollY <= 600 ) {
//         document.getElementsByClassName("aboutmeMain")[0].style.right = aboutmeMainX + "px";
//         document.getElementsByClassName("aboutmeCards")[0].style.left = 10000 + "px";
//     } else if ( currentScrollY > 600 && currentScrollY <= 800 ) {
//         // main은 right : 0으로 고정
//         document.getElementsByClassName("aboutmeMain")[0].style.right = 0 + "px";
//         document.getElementsByClassName("aboutmeCards")[0].style.left = aboutmeCardsX + "px";
//     } else  {
//         // 900이상
//         document.getElementsByClassName("aboutmeMain")[0].style.right = 0 + "px";
//         document.getElementsByClassName("aboutmeCards")[0].style.left = 0 + "px";
//     }

//     // console.log("aboutmeMainX : " + aboutmeMainX);

// })

//Section03 스크롤에 따른 카드 뒤집기 효과
// window.addEventListener('scroll', function() {
//     let currentScrollYsection03 = this.window.scrollY;
    
//     if (currentScrollYsection03 >= 1400) {
//         document.getElementsByClassName("flipSkillsJavascript")[0].style.transform = "rotateY(180deg)"
//         document.getElementsByClassName("flipSkillsReact")[0].style.transform = "rotateY(180deg)"
//     } else {
//         document.getElementsByClassName("flipSkillsJavascript")[0].style.transform = "rotateY(0deg)"
//         document.getElementsByClassName("flipSkillsReact")[0].style.transform = "rotateY(0deg)"
//     }

//     if (currentScrollYsection03 >= 1600) {
//         document.getElementsByClassName("flipSkillsHTML")[0].style.transform = "rotateY(180deg)"
//         document.getElementsByClassName("flipSkillsTypescript")[0].style.transform = "rotateY(180deg)"
//     } else {
//         document.getElementsByClassName("flipSkillsHTML")[0].style.transform = "rotateY(0deg)"
//         document.getElementsByClassName("flipSkillsTypescript")[0].style.transform = "rotateY(0deg)"
//     }
// })


//  section03 배경 이미지 움직이는 효과
let skillsCardsList = ['htmlImg', 'cssImg', 'jsImg', 'reactImg', 'typescriptImg'];
let cardsN = skillsCardsList.length // 이미지의 갯수

skillsCardsList.forEach(function(a){
    document.getElementsByClassName(`${a}`)[0].style.width = (100 / cardsN) + '%';
    

})
let skillsCardsImgList = ['htmlImgImg', 'cssImgImg', 'jsImgImg', 'reactImgImg', 'typescriptImgImg'];

// skillsCard의 높이 구하기
let cardElement = document.getElementsByClassName('skillsCard')[0];
let cardHeight = getComputedStyle(cardElement).height;
// console.log(cardHeight);


skillsCardsImgList.forEach(function(a){
    let aElement = document.getElementsByClassName(`${a}`)[0];
    let aHeight = getComputedStyle(aElement).height;
    // console.log(aHeight);

    let translateHeight = parseFloat(aHeight) + parseFloat(cardHeight) + "px";
    // console.log(translateHeight);

    //랜덤
    let randomTop = Math.random() * (300) + 0 + 'px';
    // let randomTop = 100 + 'px';
    // let sample01After = -parseFloat(aHeight) - parseFloat(cardHeight) + parseFloat(randomTop) + 'px';
    // let sample02Before = parseFloat(aHeight) + parseFloat(cardHeight) + parseFloat(randomTop) + 'px';

    // 움직인 전체 길이
    let fullHeight = parseFloat(cardHeight) + parseFloat(aHeight);
    // console.log("fullHeight : " + fullHeight);
    // 비율로 나눠서 시간 분배
    // 1) ~ 2) 시간동안 가는 거리
    let firstHeight = parseFloat(randomTop) + parseFloat(aHeight);
    let firstTime = Number((parseFloat(firstHeight / fullHeight)).toFixed(2));
    // console.log("firstTime : " + typeof firstTime);
    
    let firstTime001 = firstTime + 0.01;
    let firstTime002 = firstTime + 0.02;
    let firstTime003 = firstTime + 0.03;
    // 5) ~6) 시간동안 가는 거리 // 필요는 없네...
    let secondHeight = parseFloat(cardHeight) - parseFloat(randomTop);
    let secondTime = (parseFloat(secondHeight / fullHeight)).toFixed(2);
    // console.log("secondTime : " + secondTime);


    let skillsAnimation = document.getElementsByClassName(`${a}`)[0].animate(
        [
            { transform: `translateY(${randomTop})`, opacity: 1, offset: 0 }, // 1) 시작
            { transform: `translateY(-${aHeight})`, opacity: 1, offset: `${firstTime}`}, // 2) 중간1-1
            { transform: `translateY(-${aHeight})`, opacity: 0, offset: `${firstTime001}`}, // 3) 중간1-2
            { transform: `translateY(${cardHeight})`, opacity: 0, offset: `${firstTime002}`}, // 4) 중간2-1
            { transform: `translateY(${cardHeight})`, opacity: 1, offset: `${firstTime003}`}, // 5) 중간2-2
            { transform: `translateY(${randomTop})`, opacity: 1, offset: 1} // 6) 끝
        ], 
        {
            duration: 10000,
            iterations: Infinity,
        }
    )

    let isPaused = false;

    document.getElementsByClassName('skillCards-pause')[0].addEventListener('click', function(){
        
        console.log("Click")
        if (isPaused) {
            skillsAnimation.play();  // 애니메이션 재생
            isPaused = false;
            document.getElementsByClassName('skillCards-pause-btn')[0].classList.remove('hide-skillCards-pause-btn');
            document.getElementsByClassName('skillCards-pause-btn')[0].classList.add('show-skillCards-pause-btn');
            document.getElementsByClassName('skillCards-play-btn')[0].classList.add('hide-skillCards-play-btn');
            document.getElementsByClassName('skillCards-play-btn')[0].classList.remove('show-skillCards-play-btn');
        } else {
            skillsAnimation.pause();  // 애니메이션 일시정지
            isPaused = true;
            document.getElementsByClassName('skillCards-pause-btn')[0].classList.add('hide-skillCards-pause-btn');
            document.getElementsByClassName('skillCards-pause-btn')[0].classList.remove('show-skillCards-pause-btn');
            document.getElementsByClassName('skillCards-play-btn')[0].classList.add('show-skillCards-play-btn');
            document.getElementsByClassName('skillCards-play-btn')[0].classList.remove('hide-skillCards-play-btn');
        }
    })
})

// + 버튼 클릭시 모양변화
// + 버튼 클릭시 화면 전환
//skills
clickPlusBtn('skillCards-pause02', 'rotate-skillCards-pause02', 'skillsCard', 'skillsCardFront', 'skillsCardBack', 'skillsCardBackContent');


//aboutmeGithub, aboutmeBlog, aboutmeResume clickPlusBtn 기능 추가
clickPlusBtn('aboutmeGithub-plusBtn', 'rotate-aboutmeGithub-plusBtn', 'aboutmeGithub','aboutmeGithubFront', 'aboutmeGithubBack', 'aboutmeGithub-content');
clickPlusBtn('aboutmeResume-plusBtn', 'rotate-aboutmeResume-plusBtn', 'aboutmeResume','aboutmeResumeFront', 'aboutmeResumeBack', 'aboutmeResume-content');


function clickPlusBtn(plusBtn, rotatePlusBtn, aboutmeEle, front, back, backContent){
    let rotateStatus = false;

    document.getElementsByClassName(plusBtn)[0].addEventListener('click', function(){
        console.log(`${plusBtn}`);

        // x표시 -> +
        if (rotateStatus) {
            rotateStatus = false;
            document.getElementsByClassName(plusBtn)[0].classList.remove(rotatePlusBtn);
            
            // 뒷면 -> 앞면
            document.getElementsByClassName(backContent)[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName(back)[0].style.display = 'none';
                document.getElementsByClassName(front)[0].style.display = 'flex';
            }, 200);
            setTimeout(function(){
                document.getElementsByClassName(front)[0].style.opacity = 1;
            }, 400);
        }

        else {
            // +표시 -> X
            rotateStatus = true;
            document.getElementsByClassName(plusBtn)[0].classList.add(rotatePlusBtn);

            // 앞면 -> 뒷면
            document.getElementsByClassName(front)[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName(front)[0].style.display = 'none';
                document.getElementsByClassName(aboutmeEle)[0].style.backgroundColor = 'black';
            }, 200);
            setTimeout(function(){
                document.getElementsByClassName(back)[0].style.display = 'flex';
            }, 400)
            setTimeout(function(){
                document.getElementsByClassName(back)[0].style.opacity = 1;
                document.getElementsByClassName(backContent)[0].style.opacity = 1;
            }, 600)
        }
    })
}

clickPlusBtnWhite('aboutmeBlog-plusBtn', 'rotate-aboutmeBlog-plusBtn', 'aboutmeBlog','aboutmeBlogFront', 'aboutmeBlogBack', 'aboutmeBlog-content');

function clickPlusBtnWhite(plusBtn, rotatePlusBtn, aboutmeEle, front, back, backContent){
    let rotateStatus = false;

    document.getElementsByClassName(plusBtn)[0].addEventListener('click', function(){
        // x표시 -> +
        if (rotateStatus) {
            rotateStatus = false;
            document.getElementsByClassName(plusBtn)[0].classList.remove(rotatePlusBtn);
            
            // 뒷면 -> 앞면
            document.getElementsByClassName(backContent)[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName(back)[0].style.display = 'none';
                document.getElementsByClassName(front)[0].style.display = 'flex';
            }, 200);
            setTimeout(function(){
                document.getElementsByClassName(front)[0].style.opacity = 1;
            }, 400);
        }

        else {
            // +표시 -> X
            rotateStatus = true;
            document.getElementsByClassName(plusBtn)[0].classList.add(rotatePlusBtn);

            // 앞면 -> 뒷면
            document.getElementsByClassName(front)[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName(front)[0].style.display = 'none';
                document.getElementsByClassName(aboutmeEle)[0].style.backgroundColor = 'white';
            }, 200);
            setTimeout(function(){
                document.getElementsByClassName(back)[0].style.display = 'flex';
            }, 400)
            setTimeout(function(){
                document.getElementsByClassName(back)[0].style.opacity = 1;
                document.getElementsByClassName(backContent)[0].style.opacity = 1;
            }, 600)
        }
    })
}


// section04 캐러셀 슬라이드
// 좌우측 화살표 클릭시 이동 및 점 클릭 시 이동
let slideIndex = 0;

let project01Img = document.getElementsByClassName('projects01Img')[0];
let img01Width = parseInt(getComputedStyle(project01Img).width);

document.getElementsByClassName("projects01ImgLeft")[0].addEventListener('click', function() {

    clearInterval(slideTimer);

    if (slideIndex == 0) {
        return;
    }
    slideIndex -= 1;

    console.log(slideIndex);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width * slideIndex}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[slideIndex + 1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[slideIndex].style.color = "white";
});

document.getElementsByClassName("projects01ImgRight")[0].addEventListener('click', function() {

    clearInterval(slideTimer);

    if (slideIndex == 4) {
        return;
    }
    slideIndex += 1;

    console.log(slideIndex);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width * slideIndex}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[slideIndex - 1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[slideIndex].style.color = "white";

});

document.getElementsByClassName("projects01Dot01")[0].addEventListener('click', function() {
    clearInterval(slideTimer);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(0, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[0].style.color = "white";
    document.getElementsByClassName("projects01Dot01")[1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[2].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[3].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[4].style.color = "grey";
    slideIndex = 0;
})

document.getElementsByClassName("projects01Dot01")[1].addEventListener('click', function() {
    clearInterval(slideTimer);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[1].style.color = "white";
    document.getElementsByClassName("projects01Dot01")[0].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[2].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[3].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[4].style.color = "grey";
    slideIndex = 1;

})

document.getElementsByClassName("projects01Dot01")[2].addEventListener('click', function() {
    clearInterval(slideTimer);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width * 2}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[2].style.color = "white";
    document.getElementsByClassName("projects01Dot01")[0].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[3].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[4].style.color = "grey";
    slideIndex = 2;

})

document.getElementsByClassName("projects01Dot01")[3].addEventListener('click', function() {
    clearInterval(slideTimer);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width * 3}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[3].style.color = "white";
    document.getElementsByClassName("projects01Dot01")[0].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[2].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[4].style.color = "grey";
    slideIndex = 3;

})

document.getElementsByClassName("projects01Dot01")[4].addEventListener('click', function() {
    clearInterval(slideTimer);
    
    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width * 4}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[4].style.color = "white";
    document.getElementsByClassName("projects01Dot01")[0].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[2].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[3].style.color = "grey";
    slideIndex = 4;

})

// 시간 간격에 따라 슬라이드 이동
// 점, 화살표 클릭 이후에는 진행되지 않음
let slideTimer = setInterval(function(){
    if (slideIndex == 4) {
        slideIndex = -1;
        document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(0, 0, 0)`;
        document.getElementsByClassName("projects01Dot01")[0].style.color = "white";
        document.getElementsByClassName("projects01Dot01")[1].style.color = "grey";
        document.getElementsByClassName("projects01Dot01")[2].style.color = "grey";
        document.getElementsByClassName("projects01Dot01")[3].style.color = "grey";
        document.getElementsByClassName("projects01Dot01")[4].style.color = "grey";
    }

    slideIndex += 1;

    // console.log(slideIndex);

    document.getElementsByClassName("projects01Img-carousel")[0].style.transform = `translate3d(-${img01Width * slideIndex}px, 0, 0)`;
    document.getElementsByClassName("projects01Dot01")[slideIndex - 1].style.color = "grey";
    document.getElementsByClassName("projects01Dot01")[slideIndex].style.color = "white";

},2000)

// slideTimer;

// 클릭하는 기능 하단에 추가
// clearInterval(slideTimer);

// section05 스크롤에 따라 career01 서서히 올라오기, 4800?
window.addEventListener('scroll', function() {
    let currentScrollYsection05 = this.window.scrollY;
    // console.log("currentScrollYsection05 : " + currentScrollYsection05)

    if ( (true) ) {
        document.getElementsByClassName("career01")[0].classList.add("show-career01");

    }
    // career02 추가시 적용
    // if ( (currentScrollYsection05 >= 5700) && (currentScrollYsection05 <= 6300) ) {
    //     document.getElementsByClassName("career01")[0].classList.remove("hide-career01");
    //     document.getElementsByClassName("career01")[0].classList.add("show-career01");

    // } else {
    //     document.getElementsByClassName("career01")[0].classList.remove("show-career01");
    //     document.getElementsByClassName("career01")[0].classList.add("hide-career01");
    // }
})