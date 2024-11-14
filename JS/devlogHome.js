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

// 노션에서 받아온 데이터 넘기기
async function fetchPosts() {
    const response = await fetch('http://localhost:3002/posts');
    const posts = await response.json();

    const container = document.getElementsByClassName('main-content-main-list')[0];
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <div class="tags">${post.tags.map(tag => `<span>#${tag}</span>`).join(' ')}</div>
        `;
        container.appendChild(postElement);
    });
}

fetchPosts();