import Chart from 'chart.js';

import { initBtnLike } from '../common.blocks/btn-like/btn-like.js';
import { initRoomImpressions } from '../common.blocks/room-impressions/room-impressions.js';

import './room-details.scss';

window.addEventListener('load', function() {
    initBtnLike();
    initRoomImpressions();
})