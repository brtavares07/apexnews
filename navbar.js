window.addEventListener("scroll", function(){
    let navbar = document.querySelector('.container__navbar')
    navbar.classList.toggle('rolagem', window.scrollY > 0)
})