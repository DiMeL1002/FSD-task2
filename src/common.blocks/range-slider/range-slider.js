export function initRangeSlider() {
    let dragSlider = document.querySelector('.range-slider__slider');

    noUiSlider.create(dragSlider, {
        start: [5000, 10000],
        behaviour: 'drag',
        connect: true,
        range: {
            'min': 0,
            'max': 15000
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: 'Р'
        })
    });

    let marginMin = document.querySelector('.range-slider__min-value');
    let marginMax = document.querySelector('.range-slider__max-value');

    dragSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            marginMax.innerHTML = values[handle];
        } else {
            marginMin.innerHTML = values[handle];
        }
    });
}