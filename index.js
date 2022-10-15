const usuarioItemMain  = document.querySelector (".usuario__item--main")
const usuarioContainer  = document.querySelector (".usuario__container")
const usuario = document.querySelector (".usuario")
const searchButton = document.querySelector (".search__button")
const searchToggle = document.querySelector (".search")
const lupaAToggle = document.querySelector (".lupa__a")
const lupaBToggle = document.querySelector (".lupa__b")
const navToggle = document.querySelector ("#nav__btn")
const navCToggle = document.querySelector (".nav__bar")
const navBToggle = document.querySelector (".nav__bar_box")
const listBUser = document.querySelector (".list__btn-user")
const listShow = document.querySelector (".list__show")

usuarioItemMain.addEventListener("click", () => {
    usuarioContainer.classList.toggle("usuario__container_visible")
    usuarioItemMain.classList.toggle("usuario__item--main_visible")
})

usuarioItemMain.addEventListener("click", () => {
    usuario.classList.toggle("usuario_visible")
})

navToggle.addEventListener("click", () => {
    navCToggle.classList.toggle("nav__bar_visible")
    navBToggle.classList.toggle("nav__toggle_visible")
})

listBUser.addEventListener("click", () => {
    listShow.classList.toggle("list__show_active")
})


searchButton.addEventListener("click", () => {
    searchToggle.classList.toggle("search__toggle")
    searchButton.classList.toggle("search__button_toggle")
    lupaAToggle.classList.toggle("lupa__a_toggle")
    lupaBToggle.classList.toggle("lupa__b_toggle")
})