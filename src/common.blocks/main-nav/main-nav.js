export function menuListOpen() {
    let menuList = document.querySelectorAll('.main-nav__dropdown');

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('click', function(e) {
            let innerList = this.parentElement.querySelector('.main-nav__inner-list');
            innerList.classList.toggle('main-nav__inner-list_opened');
        })
    }
}