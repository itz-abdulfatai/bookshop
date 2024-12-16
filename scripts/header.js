const header = document.querySelector('header')
const nav = document.querySelector('nav')

document.addEventListener('scrollend', () => {
    nav.classList.remove('active')
    if (window.scrollY > 500) {
        header.classList.add('passed')
    } else {
        
        header.classList.remove('passed')
    }
} )


const navMenu = document.querySelector('.menu')



navMenu.addEventListener('click', () => {
nav.classList.toggle('active')
})

