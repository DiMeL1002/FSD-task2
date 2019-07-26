export function mobileNav() {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        menu.classList.toggle('mobile-nav_opened')
    })

    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target)) {
            hamburger.classList.remove('is-active');
            menu.classList.remove('mobile-nav_opened')
        }
    })
}