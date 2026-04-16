function home() {
    const show = document.getElementsByClassName("home-content")
    const notShow = document.querySelectorAll(".explore,.cuisine-content,.about-us,.more-content")
    for (i = 0; i < show.length; i++) {
        show[i].style.display = "block"
    };
    for (n = 0; n < notShow.length; n++) {
        notShow[n].style.display = "none"
    };
}

function cuisine() {
    const show = document.getElementsByClassName("cuisine-content")
    const notShow = document.querySelectorAll(".explore,.home-content,.about-us,.more-content")
    for (i = 0; i < show.length; i++) {
        show[i].style.display = "block"
    } 
    for (n = 0; n < notShow.length; n++) {
        notShow[n].style.display = "none"
    };
}

function aboutUs() {
    const show = document.getElementsByClassName("about-us")
    const notShow = document.querySelectorAll(".explore,.home-content,.cuisine-content,.more-content")
    for (i = 0; i < show.length; i++) {
        show[i].style.display = "block"
    }
    for (n = 0; n < notShow.length; n++) {
        notShow[n].style.display = "none"
    };
}

function more() {
    const show = document.getElementsByClassName("more-content")
    const notShow = document.querySelectorAll(".explore,.home-content,.cuisine-content,.about-us")
    for (i = 0; i < show.length; i++) {
        show[i].style.display = "block"
    } 
    for (n = 0; n < notShow.length; n++) {
        notShow[n].style.display = "none"
    };
}