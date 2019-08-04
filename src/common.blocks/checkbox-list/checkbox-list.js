export function initCheckboxList() {
    let $button = $('.checkbox-list__header');

    $button.on('click', function() {
        let $list = $(this).closest('.checkbox-list');

        $list.toggleClass('checkbox-list_opened');
        $list.children('.checkbox-list__body').toggleClass('checkbox-list__body_visible');
    })
}