const botao = document.querySelector(".btn-fixed")

window.addEventListener("scroll", function (event){
    if(window.scrollY == 0){
        botao.classList.remove("visible")
    }
    else{
        botao.classList.add("visible");
    }
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "img/hamburguer.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone').src = "img/close.png";
    }
}