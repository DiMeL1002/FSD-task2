export function initFilters() {
    let $filtersBody = $('.filters__body');
    let $btnOpen = $('.filters__button-open');

    $btnOpen.on('click', function() {
        $filtersBody.addClass('filters__body_visible');
    })

    let $btnApply = $('.filters__button-apply');

    $btnApply.on('click', function() {
        close();
    })

    function close() {
        $filtersBody.removeClass('filters__body_visible');
    }
}