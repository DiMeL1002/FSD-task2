import "jquery"
import "popper.js"

import 'nouislider';
import 'nouislider/distribute/nouislider.css';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'
import Chart from 'chart.js';

import 'normalize.css';
import './main.scss';

import { mobileNav } from './common.blocks/mobile-nav/mobile-nav.js';
import { menuListOpen } from './common.blocks/main-nav/main-nav.js';
import { openDropdown } from './common.blocks/dropdown/dropdown.js';
import { checkboxList } from './common.blocks/checkbox-list/checkbox-list.js';
import { roomCard } from './common.blocks/room-card/room-card.js';
import { rangeSlider } from './common.blocks/range-slider/range-slider.js';
import { roomImpressions } from './common.blocks/room-impressions/room-impressions.js';

window.addEventListener('load', function() {
    // mobileNav();
    // menuListOpen();
    // openDropdown();
    // checkboxList();
    // roomCard();
    // rangeSlider();
    roomImpressions();
})