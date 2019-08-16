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
                $element.closest('.form-booking__dropdown-guests').after(error);
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

    let $applyButtons = $('.datepicker__apply-btn');
    $applyButtons.on('click', calculateFullPrice)

    let roomPriceForDay = $form.find('.form-booking__room-price').attr('data-price');
    let $services = $('.form-booking__service');
    
    function calculateFullPrice() {
        let dateArrival = $form.find('[name=date-arrival]').attr('value');
        dateArrival = dateArrival.split('.');
        dateArrival = new Date(dateArrival[2], dateArrival[1], dateArrival[0]);

        let dateDeparture =$form.find('[name=date-departure]').attr('value');
        dateDeparture = dateDeparture.split('.');
        dateDeparture = new Date(dateDeparture[2], dateDeparture[1], dateDeparture[0]);

        let daysCount = (+dateDeparture - +dateArrival) / 864e5;

        if (daysCount < 0) {
            $errorText.text('Выберите правильные даты');
            
            return;
        }

        $form.find('.form-booking__rent-price-desc')
            .text(`${addSpaceAndSymbol(roomPriceForDay)} х ${daysCount} суток`);

        let costOfRentFull = +roomPriceForDay * daysCount;
        $form.find('.form-booking__rent-price-full').text( addSpaceAndSymbol(costOfRentFull) );

        let fullPrice = 0;
        $services.each(function(i, element) {
            fullPrice += +$(element).attr('data-price');
        })
        fullPrice += costOfRentFull;

        $('.form-booking__final-price').text( addSpaceAndSymbol(fullPrice) );
    }

    function addSpaceAndSymbol (item) {
        let string = String(item) + 'Р';
        let array = string.split('');
        array.splice(array.length - 4, 0, ' ');
        let modifiedString = array.join('');

        return modifiedString;
    }

    calculateFullPrice();
}