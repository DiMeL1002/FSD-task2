import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.css';

import "jquery"
import "popper.js"

import 'normalize.css';

import { initMainNav } from './common.blocks/main-nav/main-nav.js';
import { initDropdown } from './common.blocks/dropdown/dropdown.js';
import { initDropdownDates } from './common.blocks/dropdown-dates/dropdown-dates.js';

import './main.scss';

window.addEventListener('load', function() {
    initMainNav();
    initDropdown();
    initDropdownDates();
})