const header = document.querySelector('header')
const nav = document.querySelector('nav')

let isScrolling = false;

const scrollHandler = () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            nav.classList.remove('active');
            if (window.scrollY > 500) {
                header.classList.add('passed');
            } else {
                header.classList.remove('passed');
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
};

document.addEventListener('scroll', scrollHandler);




const navMenu = document.querySelector('.menu')



navMenu.addEventListener('click', () => {
nav.classList.toggle('active')
})

