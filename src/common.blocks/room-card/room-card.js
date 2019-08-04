export function initRoomCard() {
    $('.room-card__carousel').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="material-icons room-card__btn-prev">expand_more</i>',
        nextArrow: '<i class="material-icons room-card__btn-next">expand_more</i>',
        dots: true
    });

    let $link = $('.room-card__link');

    $link.on('click', function(event) {
        if ($(event.target).hasClass('slick-arrow')) {
            event.preventDefault();
        }
    })
}