import './search-room.scss';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css'

import { rangeSlider } from '../common.blocks/range-slider/range-slider.js';
import { roomCard } from '../common.blocks/room-card/room-card.js';
import { checkboxList } from '../common.blocks/checkbox-list/checkbox-list.js';

window.addEventListener('load', function() {
    rangeSlider();
    roomCard();
    checkboxList();
})