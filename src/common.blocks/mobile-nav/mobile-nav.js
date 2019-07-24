export function mobileNav() {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        menu.classList.toggle('mobile-nav_opened')
    })
}