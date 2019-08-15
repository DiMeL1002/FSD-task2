import Chart from 'chart.js';
import 'jquery-validation'

import { initBtnLike } from '../common.blocks/btn-like/btn-like.js';
import { initRoomImpressions } from '../common.blocks/room-impressions/room-impressions.js';
import { initFormBooking } from '../common.blocks/form-booking/form-booking.js';


import './room-details.scss';

window.addEventListener('load', function() {
    initBtnLike();
    initRoomImpressions();
    initFormBooking();
})