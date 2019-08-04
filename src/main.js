import "jquery"
import "popper.js"

import 'nouislider';
import 'nouislider/distribute/nouislider.css';

import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.css';

import Chart from 'chart.js';

import 'normalize.css';
import './main.scss';

import { initMainNav } from './common.blocks/main-nav/main-nav.js';
import { initDropdown } from './common.blocks/dropdown/dropdown.js';
import { initDropdownDates } from './common.blocks/dropdown-dates/dropdown-dates.js';

window.addEventListener('load', function() {
    initMainNav();
    initDropdown();
    initDropdownDates();
})