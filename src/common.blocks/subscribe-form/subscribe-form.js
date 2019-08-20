export function initSubscribeForm() {
    let $form = $('.subscribe-form');
    
    $form.validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'Введите правильный email'
            }
        },
        errorPlacement: function (error, $element) {
            $element.closest('.subscribe-form').append(error);
        }
    })

    let $submitButton = $form.find('.subscribe-form__icon');

    $submitButton.mousedown('click', function() {
        $form.submit();
    })

    let $message = $('.subscribe-form__message');
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
                    $message.text('Спасибо, Вам отправлено письмо для подтверждения подписки');
                },
                error: function() {
                    $message.text('Извините, сервер не работает, попробуйте позже.');
                },
                complete: function() {
                    formIsSubmit = false;
                },
            })
        }
    })
}