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
    
    let $filters = $('.filters');

    $(document).on('click', function(e) {
        if (isOffElementClick($filters, e)) {
            close();
        }
    })

    function close() {
        $filtersBody.removeClass('filters__body_visible');
    }

    function isOffElementClick(elem, e) {
        return (!elem.is(e.target)) && (elem.has(e.target).length === 0);
    }
}