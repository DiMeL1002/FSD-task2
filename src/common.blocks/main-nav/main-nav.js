export function menuListOpen() {
    let dropdowns = document.querySelectorAll('.main-nav__dropdown');
    let menu = document.querySelector('.main-nav');

    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('click', function(e) {
            let parent = this.closest('.main-nav');
            let siblings = parent.querySelectorAll('.main-nav__inner-list');
            for (let i = 0; i < siblings.length; i++) {
                siblings[i].classList.remove('main-nav__inner-list_visible');
            }

            menu = this.closest('.main-nav__item');
            let innerList = menu.querySelector('.main-nav__inner-list');
            innerList.classList.toggle('main-nav__inner-list_visible');
        })
    }

    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target)) {
            menu.querySelector('.main-nav__inner-list').classList.remove('main-nav__inner-list_visible');
        }
    })
}