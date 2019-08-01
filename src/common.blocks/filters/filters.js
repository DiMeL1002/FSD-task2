export function filters() {
    let filters = $('.filters');
    let btnOpen = $('.filters__button-open');
    let btnApply = $('.filters__button-apply');
    let filtersBody = $('.filters__body');

    btnOpen.on('click', function() {
        filtersBody.addClass('filters__body_visible');
    })

    btnApply.on('click', function() {
        close();
    })

    $(document).on('click', function(e) {
        if (!filters.is(e.target) && filters.has(e.target).length === 0) {
            close();
        }
    })
    
    function close() {
        filtersBody.removeClass('filters__body_visible');
    }
}