export function initMainNav() {
    let $menu = $('.main-nav');

    let $dropdowns = $menu.find('.main-nav__item_dropdown');

    $dropdowns.on('click', function() {
        $(this).toggleClass('main-nav__item_opened');
        $(this).siblings('.main-nav__item_dropdown').removeClass('main-nav__item_opened');
    })

    $(document).on('click', function(e) {
        if (isOffElementClick($dropdowns, e)) {
            $dropdowns.removeClass('main-nav__item_opened');
        }
    })

    let $hamburger = $menu.children('.hamburger');
    let $menuList = $menu.children('.main-nav__list');

    $hamburger.on('click', function() {
        $(this).toggleClass('is-active');
        $menuList.toggleClass('main-nav__list_visible');
    })

    $(document).on('click', function(e) {
        if (isOffElementClick($menu, e)) {
            $hamburger.removeClass('is-active');
            $menuList.removeClass('main-nav__list_visible');
        }
    })

    function isOffElementClick(elem, e) {
        return (!elem.is(e.target)) && (elem.has(e.target).length === 0);
    }
}