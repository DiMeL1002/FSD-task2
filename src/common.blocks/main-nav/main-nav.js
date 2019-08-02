export function mainNav() {
    let menu = $('.main-nav');
    let hamburger = menu.children('.hamburger');
    let menuList = menu.children('.main-nav__list');
    let dropdowns = menu.find('.main-nav__item_dropdown');

    dropdowns.on('click', function() {
        $(this).toggleClass('main-nav__item_opened');
        $(this).siblings('.main-nav__item_dropdown').removeClass('main-nav__item_opened');
    })

    $(document).on('click', function(e) {
        if (!dropdowns.is(e.target) && dropdowns.has(e.target).length === 0) {
            dropdowns.removeClass('main-nav__item_opened');
        }
    })

    hamburger.on('click', function() {
        $(this).toggleClass('is-active');
        menuList.toggleClass('main-nav__list_visible');
    })
    
    $(document).on('click', function(e) {
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            hamburger.removeClass('is-active');
            menuList.removeClass('main-nav__list_visible');
        }
    })
}