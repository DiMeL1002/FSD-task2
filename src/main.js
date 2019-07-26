import "jquery"
import "popper.js"

import 'normalize.css';
import './main.scss';

import { mobileNav } from './common.blocks/mobile-nav/mobile-nav.js';
import { menuListOpen } from './common.blocks/main-nav/main-nav.js';
import { openDropdown } from './common.blocks/dropdown/dropdown.js';
import { checkboxList } from './common.blocks/checkbox-list/checkbox-list.js';

window.addEventListener('load', function() {
    mobileNav();
    menuListOpen();
    openDropdown();
    checkboxList();
})