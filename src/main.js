import "jquery"
import "popper.js"

import 'normalize.css';
import './main.scss';

import { mobileNav } from './common.blocks/mobile-nav/mobile-nav.js';
import { menuListOpen } from './common.blocks/main-nav/main-nav.js';
import { openDropdown } from './common.blocks/dropdown/dropdown.js';


window.onload = function() {
    mobileNav();
    menuListOpen();
    openDropdown();
 };