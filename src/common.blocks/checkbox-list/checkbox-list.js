export function checkboxList() {
    let buttons = document.querySelectorAll('.checkbox-list__head');

    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener('click', function() {
            this.parentElement.classList.toggle('checkbox-list_opened');
        })
    }
}