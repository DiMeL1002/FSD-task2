export function initFormReg() {
    let $form = $('.form-reg');

    $form.validate({
        rules: {
            firstName: {
                required: true,
                minlength: 5
            },
            secondName: {
                required: true,
                minlength: 5
            },
            birthday: {
                required: true,
                date: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
        },
        messages: {
            firstName: {
                required: 'Введите Имя',
                minlength: 'Имя должно быть не менее 5 символов',
            },
            secondName: {
                required: 'Введите Фамилию',
                minlength: 'Фамилия должна быть не менее 5 символов',
            },
            birthday: {
                required: 'Введите дату рождения',
                date: 'Введите правильную дату рождения',
            },
            email: {
                required: 'Введите email',
                email: 'Введите правильный email',
            },
            password: {
                required: 'Введите пароль',
                minlength: 'Пароль должен быть не менее 5 символов',
            }
        }
    })

    let $errorText = $('.form-reg__error-text');
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
                }
            })
        }
    })
}