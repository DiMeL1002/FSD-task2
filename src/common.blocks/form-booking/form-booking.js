export function initFormBooking() {
    let $form = $('.form-booking');

    $form.validate({
        rules: {
            'date-arrival': { required: true },
            'date-departure': { required: true },
            'guests-count': { required: true }
        },
        messages: {
            'date-arrival': { required: 'Выберите дату прибытия' },
            'date-departure': { required: 'Выберите дату выезда' },
            'guests-count': { required: 'Выберите количества гостей' }
        },
        errorPlacement: function (error, $element) {
            if ( $element.hasClass('dropdown-dates__input') ) {
                $element.closest('.form-booking__dropdown-date').append(error);
            }
            else {
                $element.closest('.form-booking__dropdown').after(error);
            }
        }
    })

    let $errorText = $('.form-booking__error-text');
    let formIsSubmit = false;

    $form.on('submit', function(e) {
        e.preventDefault();

        if (formIsSubmit) {
            return;
        }

        if( $form.valid() ) {
            formIsSubmit = true;

            $.ajax({
                url: 'app.php',
                method: 'POST',
                data: $form.serialize(),
                dataType: 'json',
                success: function() {
                    // .......
                },
                error: function() {
                    $errorText.text('Извините, сервер не работает, попробуйте позже.');
                },
                complete: function() {
                    formIsSubmit = false;
                },
            })
        }
    })
}