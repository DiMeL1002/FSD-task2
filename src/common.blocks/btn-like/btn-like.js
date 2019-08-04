export function initBtnLike() {
    let $btns = $('.btn-like');

    $btns.each(function() {
        let $btn = $(this);
        let $countContainer = $btn.children('.btn-like__count');
        let $iconContainer = $btn.children('.btn-like__icon');
        let count = $btn.attr('data-count');
        
        insertCount(count, $countContainer);

        $btn.on('click', function(event) {
            event.preventDefault();
            
            if ( $btn.hasClass('btn-like_pressed') ) {
                $btn.removeClass('btn-like_pressed');
                count--;
                $btn.attr('data-count', count);
                insertCount(count, $countContainer);
                insertCount('favorite_border', $iconContainer);
            }
            else {
                $btn.addClass('btn-like_pressed');
                count++;
                $btn.attr('data-count', count);
                insertCount(count, $countContainer);
                insertCount('favorite', $iconContainer);
            }
        })
    })
    
    function insertCount(count, elem) {
        elem.html(count);
    }
}