export function initFormLogIn() {
    let $form = $('.form-logIn');

    $form.validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 5,
            },
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'Введите правильный email',
            },
            password: {
                required: 'Введите пароль',
                minlength: 'Пароль должен быть не менее 5 символов',
            },
        },
    })

    let $errorText = $('.form-logIn__error-text');
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