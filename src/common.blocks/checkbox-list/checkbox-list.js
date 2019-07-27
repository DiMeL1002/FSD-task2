export function checkboxList() {
    let buttons = document.querySelectorAll('.checkbox-list__header');

    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener('click', function() {
            let parent = this.parentElement;
            parent.classList.toggle('checkbox-list_opened');
            parent.querySelector('.checkbox-list__body').classList.toggle('checkbox-list__body_visible');
        })
    }
}