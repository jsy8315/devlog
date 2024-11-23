function clickOpenNewTabHandler(clickTarget, pagelink) {
    document.getElementsByClassName(`${clickTarget}`)[0].addEventListener('click', function(){
        window.open(`${pagelink}`);
    })
}

function clickMovePageHandler(clickTarget, pagelink){
    document.getElementsByClassName(`${clickTarget}`)[0].addEventListener('click', function(){
        window.location.href = `${pagelink}`;
    })
}

clickOpenNewTabHandler('navbar-main-aboutme', 'http://jungsuyoung.com');

clickMovePageHandler('navbar-main-playground', '/playground.html')

document.getElementsByClassName('navbar-logo')[0].addEventListener('click', function(){
    location.reload(true);
})

// mobile Navbar list 버튼 클릭시 목록 보이기
document.getElementsByClassName('navbar-main-list')[0].addEventListener(
    'click', function(){
        clickBtnSwitchHandler('navbar-main-list', 'navbar-main-list-img', 'navbar-main-list-img-x', 'navbar-mobile-list')
    }
)

// 기능 : A버튼 클릭시 B버튼, B버튼 다시 클릭시 A버튼 (이미지 갈아 끼우기), 파라미터는 이미지 클래스 네임 넣으면 됨
function clickBtnSwitchHandler(btn, aBtnImgParam, bBtnImgParam, etc01Param) {
    console.log('hi');
    let aBtnImg = document.getElementsByClassName(aBtnImgParam)[0]; // aBtn에는 버튼 이미지 넣기
    let bBtnImg = document.getElementsByClassName(bBtnImgParam)[0]; // bBtn에도 버튼 이미지 넣기
    let etc01 = document.getElementsByClassName(etc01Param)[0]; // 추가적으로 넣고 싶은 요소
    let btnClass = document.getElementsByClassName(btn)[0];

    // 1. 기본으로 보이는 화면은 aBtn
        // clicked가 btn요소에 포함되지 않음
    // 2. aBtn 클릭 시 aBtn 사라짐, bBtn 보임
        // clicked가 btn요소에 포함됨
    if (btnClass.classList.contains('clicked')) { // 이미 클릭된 경우, b -> a
        bBtnImg.style.display = 'none';
        aBtnImg.style.display = 'block';
        btnClass.classList.remove('clicked');
        etc01.style.display = 'none';
        document.getElementsByClassName('main-section')[0].style.margin = '59px 0px 0px 0px';
        
    } else { // 클릭 안된 경우, a -> b
        aBtnImg.style.display = 'none';
        bBtnImg.style.display = 'block';
        btnClass.classList.add('clicked');
        etc01.style.display = 'flex';
        document.getElementsByClassName('main-section')[0].style.margin = '0px';
    }
}

// 검색기능 구현
function searchHandler(){
    document.getElementsByClassName()
}

// 노션에서 받아온 데이터 넘기기 -> 추후 리액트, Next.js에서 구현 예정
// async function fetchPosts() {
//     try {
//         const response = await fetch('http://localhost:3002/posts', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         // 응답이 정상적인 JSON인 경우 처리
//         const posts = await response.json();

//         const container = document.getElementsByClassName('main-content-main-list')[0];
//         posts.forEach(post => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');

//             postElement.innerHTML = `
//                 <div>${post.publishedDate}</div>
//                 <h2>${post.title}</h2>
//                 <p>${post.content}</p>
//                 <div class="tags">${post.tags.map(tag => `<span>#${tag}</span>`).join(' ')}</div>
//                 <img src="${post.thumbnail}" alt="Thumbnail Image" style="max-width: 100%; height: auto;" />
//             `;
//             container.appendChild(postElement);
//         });
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//     }
// }

// fetchPosts();