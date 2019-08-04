import './search-room.scss';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css'

import { initRangeSlider } from '../common.blocks/range-slider/range-slider.js';
import { initRoomCard } from '../common.blocks/room-card/room-card.js';
import { initCheckboxList } from '../common.blocks/checkbox-list/checkbox-list.js';
import { initFilters } from '../common.blocks/filters/filters.js';

window.addEventListener('load', function() {
    initRangeSlider();
    initRoomCard();
    initCheckboxList();
    initFilters();
})