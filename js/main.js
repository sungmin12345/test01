const backToTop = document.getElementById('backtotop');

function checkscroll() {
    let pageyoffset = window.pageyoffset;

    if (pageyoffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove("show");
    }

}

function movebacktotop() {
    if (window.pageyoffset > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

window.addEventListener('scroll', checkscroll);
backToTop.addEventListener('click', movebacktotop);