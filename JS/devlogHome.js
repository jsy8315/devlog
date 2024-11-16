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
document.getElementsByClassName('navbar-main-list')[0].addEventListener('click', function(){
    console.log(1);
    // 1. list 버튼이 x로 바뀌고 (x버튼 누르면 다시 돌아옴)
    // 2. 아래로 펼쳐지고(게시물 자체가 아래로 내려감) 
        // width가 100%인 화면이 나옴 화면 구성 : aboutme, playground 버튼이 나옴

})

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