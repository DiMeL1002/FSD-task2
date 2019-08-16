export function initDropdownDates() {
    $('.dropdown-dates__input').each(function () {
        let $that = $(this);

        let $myDatepicker = $(this).datepicker({
            navTitles: {
                days: 'MM yyyy'
            },
            prevHtml: "<i class='material-icons'>arrow_back</i>",
            nextHtml: "<i class='material-icons'>arrow_forward</i>",
            offset: 5,
            multipleDatesSeparator: " - ",
            onSelect: function(formattedDate) {
                $that.attr('value', formattedDate);
            },
            onShow: function(inst, animationCompleted) {
                if (animationCompleted === false) {
                    centeringDatepickerInForm();
                }
            }
        });

        let $btn = $myDatepicker.next('.dropdown-dates__icon');

        $btn.on('click', function() {
            $that.focus();
        });

        let $buttons = $('<div class = "datepicker__buttons">');
        let $cancelBtn = $('<button\
                            class = "button button_theme_plain-g datepicker__cancel-btn",\
                            type = "button">Очистить</button>')
                        .appendTo($buttons);
        let $applyBtn = $('<button\
                            class = "button button_theme_plain datepicker__apply-btn"\
                            type = "button">Применить</button>')
                        .appendTo($buttons);

        let $myDatepickerData = $myDatepicker.data('datepicker');
        let $datepicker = $($myDatepickerData.$datepicker);

        $datepicker.append($buttons);

        $cancelBtn.on('click', function() { $myDatepickerData.clear(); });
        $applyBtn.on('click', function() { $myDatepickerData.hide(); });

        function centeringDatepickerInForm() {
            let $form;

            if ( $that.closest('form').length > 0 ) {
                $form = $that.closest('form');
            }
            else  {
                $form = $that.closest('.filters__body');
            }

            let formWidth = $form.outerWidth();
            let formOffset = $form.offset();
            let datepickerWidth = $datepicker.outerWidth();
            let datepickerOffsetLeft = (formWidth - datepickerWidth) / 2 + formOffset.left;

            $datepicker.css('left', datepickerOffsetLeft);
        }
    })
}