export function initDropdown() {
    let $dropdown = $('.dropdown');

    $dropdown.each(function() {
        let $dropdown = $(this);
        let $dropdownHead = $dropdown.children('.dropdown__header');
        let $dropdownBody = $dropdown.children('.dropdown__body');
        
        // Открытие дропдауна
        $dropdownHead.on('click', function() {
            $dropdown.toggleClass('dropdown_opened');
            $dropdownBody.toggleClass('dropdown__body_visible');
        })

        let $items = $dropdownBody.children('.dropdown__item');

        // Увеличение и уменьшение значения элемента
        $items.each(function() {
            let $item = $(this);
            let $btnPlus = $item.find('.dropdown__plus');
            let $btnMinus = $item.find('.dropdown__minus');
           
            $btnPlus.on('click', function() {
                let count = $item.attr('data-count');
                counting('+', count, $item);
            })
            $btnMinus.on('click', function() {
                let count = $item.attr('data-count');
                if (count > 0) {
                    counting('-', count, $item);
                }
            })
        })

        function counting(op, count, item) {
            let $countText = item.find('.dropdown__count');

            switch (op) {
                case '+':
                    count++;
                    break;
                case '-':
                    count--;
                    break;
            }

            item.attr('data-count', count);
            $countText.html(count);
            totalCounting();
        }

        let $input = $dropdownHead.children('.dropdown__input');

        // Общий подсчет количества элементов и запись в инпут
        function totalCounting() {
            let totalCount = '';
            let counts = [];

            if ($dropdown.hasClass('dropdown_guests')) {
                let guestCount = 0;

                $items.each(function() {
                    let count = parseInt( $(this).attr('data-count') );

                    switch ( $(this).attr('data-item') ) {
                        case 'adults':
                        case 'children':
                            if (count > 0) {
                                guestCount += count;

                                if (counts.length > 0) {
                                    counts[0] = (guestCount + ' '
                                        + bowWord(guestCount, ['гость', 'гостя', 'гостей']));
                                }
                                else {
                                    counts.push(guestCount + ' '
                                        + bowWord(guestCount, ['гость', 'гостя', 'гостей']));
                                }
                            }
                            break;
                        case 'babies':
                            if (count > 0) {
                                counts.push(count + ' '
                                    + bowWord(count, ['младенец', 'младенца', 'младенцев']));
                            }
                            break;
                    }
                })
            }

            if ( $dropdown.hasClass('dropdown_comfort') ) {
                $items.each(function() {
                    let count = parseInt( $(this).attr('data-count') );
                    
                    switch ( $(this).attr('data-item') ) {
                        case 'bedrooms':
                            if (count > 0) {
                                counts.push(count + ' '
                                    + bowWord(count, ['спальня', 'спальни', 'спален']));
                            }
                            break;
                        case 'beds':
                            if (count > 0) {
                                counts.push(count + ' '
                                    + bowWord(count, ['кровать', 'кровати', 'кроватей']));
                            }
                            break;
                        case 'bathrooms':
                            if (count > 0) {
                                counts.push(count + ' '
                                    + bowWord(count, ['ванная комната', 'ванные комнаты', 'ванных комнат']));
                            }
                            break;
                    }
                })
            }

            if (counts.length > 0) {
                $btnReset.addClass('dropdown__reset-btn_visible');

                counts.forEach(function(item, i) {
                    totalCount += item;
                    if (i < (counts.length - 1) ) {
                        totalCount += ', ';
                    }
                })
            }
            else {
                $btnReset.removeClass('dropdown__reset-btn_visible');
            }

            $input.attr('value', totalCount);
        }

        // очистка формы и работа кнопки "применить"
        let $btnReset;
        let $btnApply;

        if ( $dropdown.hasClass('dropdown_has-buttons') ) {
            $btnReset = $dropdownBody.find('.dropdown__reset-btn');
            $btnApply = $dropdownBody.find('.dropdown__apply-btn');

            $btnReset.on('click', function() {
                $input.removeAttr('value');
                $items.each(function() {
                    $(this).attr('data-count', '0');
                    $(this).find('.dropdown__count').html('0');
                })
                $btnReset.removeClass('dropdown__reset-btn_visible');
            })

            $btnApply.on('click', function() {
                close();
            })
        }

        // закрытие дропдауна
        $(document).on('click', function(e) {
            if (isOffElementClick($dropdown, e)) {
                close();
            }
        })

        function close() {
            $dropdown.removeClass('dropdown_opened');
            $dropdownBody.removeClass('dropdown__body_visible');
        }
    })

    function isOffElementClick(elem, e) {
        return (!elem.is(e.target)) && (elem.has(e.target).length === 0);
    }

    function bowWord (n, words) {
        let word;
        /*
        * товар - 1 | 21 | 31 | 41 | 51 | 61 |71 | 81 | 91 | 101 ...
        * товара - 2 | 3 | 4 | 22 | 23 | 24 | 32 | 33 | 34 ...
        * товаров - 0 | 5 | 6 | 7 | 8 | 9 | 10-20 | 25-30 | 35-40 ...
        * */
        if ((n === 1) || (n > 20 && n % 10 === 1)) word = words[0];
        else if ((n >= 2 && n <= 4) || (n > 20 && n % 10 >= 2 && n % 10 <= 4)) word = words[1];
        else word = words[2];

        return word;
    }
}