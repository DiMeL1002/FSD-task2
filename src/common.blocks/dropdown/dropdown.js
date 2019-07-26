export function openDropdown() {
    let dropdownHeaders = document.querySelectorAll('.dropdown__header');

    for (let i = 0; i < dropdownHeaders.length; i++) {
        dropdownHeaders[i].addEventListener('click', function() {
            let dropdown = this.parentElement;
            let dropdownBody = dropdown.querySelector('.dropdown__body');
            
            dropdownBody.classList.toggle('dropdown__body_visible');
            dropdown.classList.toggle('dropdown_opened');
        })
    }
}