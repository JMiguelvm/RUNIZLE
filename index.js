const usuarioItemMain  = document.querySelector (".usuario__item--main")
const usuarioContainer  = document.querySelector (".usuario__container")
const usuario = document.querySelector (".usuario")
const searchButton = document.querySelector (".search__button")
const searchToggle = document.querySelector (".search")
const lupaAToggle = document.querySelector (".lupa__a")
const lupaBToggle = document.querySelector (".lupa__b")

usuarioItemMain.addEventListener("click", () => {
    usuarioContainer.classList.toggle("usuario__container_visible")
    usuarioItemMain.classList.toggle("usuario__item--main_visible")
})

usuarioItemMain.addEventListener("click", () => {
    usuario.classList.toggle("usuario_visible")
})

searchButton.addEventListener("click", () => {
    searchToggle.classList.toggle("search__toggle")
    searchButton.classList.toggle("search__button_toggle")
    lupaAToggle.classList.toggle("lupa__a_toggle")
    lupaBToggle.classList.toggle("lupa__b_toggle")
})