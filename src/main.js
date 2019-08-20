import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.css';

import 'jquery-validation'

import 'normalize.css';

import './static/favicons/favicons';

import { initDropdown } from './common.blocks/dropdown/dropdown.js';
import { initDropdownDates } from './common.blocks/dropdown-dates/dropdown-dates.js';
import { initSubscribeForm } from './common.blocks/subscribe-form/subscribe-form.js';
import { initMainNav } from './common.blocks/main-nav/main-nav.js';

import './main.scss';

window.addEventListener('load', function() {
    initDropdown();
    initDropdownDates();
    initSubscribeForm();
    initMainNav();
})