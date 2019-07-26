export function roomCard() {
    $('.room-card__body').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="material-icons room-card__btn-prev">expand_more</i>',
        nextArrow: '<i class="material-icons room-card__btn-next">expand_more</i>',
        dots: true
    });

    let link = document.querySelector('.room-card__link');

    link.addEventListener('click', function(e) {
        if (e.target.classList.contains('slick-arrow')) {
            e.preventDefault();
        }
    })
}