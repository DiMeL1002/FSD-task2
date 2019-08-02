import "jquery"
import "popper.js"

import 'nouislider';
import 'nouislider/distribute/nouislider.css';
import './library.blocks/air-datepicker/datepicker.min.js';

import Chart from 'chart.js';

import 'normalize.css';
import './main.scss';

// import { mobileNav } from './common.blocks/mobile-nav/mobile-nav.js';
import { mainNav } from './common.blocks/main-nav/main-nav.js';
import { openDropdown } from './common.blocks/dropdown/dropdown.js';
import { dropdownDates } from './common.blocks/dropdown-dates/dropdown-dates.js';

window.addEventListener('load', function() {
    // mobileNav();
    mainNav();
    openDropdown();
    dropdownDates();
})