export function dropdownDates() {
    let myDatepickersCount = 0;

    $('.dropdown-dates__input').each(function () {
        let that = $(this);
        let myDatepicker = $(this).datepicker({
            navTitles: {
                days: 'MM yyyy'
            },
            prevHtml: "<i class='material-icons'>arrow_back</i>",
            nextHtml: "<i class='material-icons'>arrow_forward</i>",
            offset: 5,
            multipleDatesSeparator: " - "
        });

        let myDatepickerData = myDatepicker.data('datepicker');

        let btn = myDatepicker.next('.dropdown-dates__icon');
        btn.on('click', function() {
            that[0].focus();
        });

        let buttons = $('<div class = "datepicker__buttons">');
        let cancelBtn = $('<button\
                            class = "button button_theme_plain-g datepicker__cancel-btn",\
                            type = "button">Очистить</button>')
                        .appendTo(buttons);
        let applyBtn = $('<button\
                            class = "button button_theme_plain datepicker__apply-btn"\
                            type = "button">Применить</button>')
                        .appendTo(buttons);

        let datepicker = $('.datepicker').eq(myDatepickersCount).append(buttons);
        myDatepickersCount++;

        cancelBtn.on('click', function() { myDatepickerData.clear(); })
        applyBtn.on('click', function() { myDatepickerData.hide(); })
    })
}