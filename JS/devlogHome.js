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