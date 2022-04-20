const menu = document.querySelector('.menu')
const closebutton = document.querySelector('.closebutton')
const nav = document.querySelector('nav') // no period because it is not a class

menu.addEventListener('click', () => {
    nav.classList.add('opennav') // when onclick will add CSS class opennav. will see in dev tools
})

closebutton.addEventListener('click', () => {
    nav.classList.remove('opennav') // when onclick closebutton will remove opennav
})

