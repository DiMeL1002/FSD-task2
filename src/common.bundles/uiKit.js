import 'nouislider';
import 'nouislider/distribute/nouislider.css';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css'

import './uiKit.scss';

import { initBtnLike } from '../common.blocks/btn-like/btn-like.js';
import { initCheckboxList } from '../common.blocks/checkbox-list/checkbox-list.js';
import { initRangeSlider } from '../common.blocks/range-slider/range-slider.js';
import { initRoomCard } from '../common.blocks/room-card/room-card.js';

window.addEventListener('load', function() {
    initBtnLike();
    initCheckboxList();
    initRangeSlider();
    initRoomCard();
})