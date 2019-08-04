export function initRoomImpressions() {
    let $doughnut = $('.room-impressions__doughnut');

    new Chart($doughnut, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [65, 65, 130, 0],
                backgroundColor: [
                    '#BC9CFF',
                    '#6FCF97',
                    '#FFE39C',
                    '#919191'
                ],
                borderColor: 'white',
                borderWidth: 2,
            }]
        },
        options: {
            cutoutPercentage: 90,
            responsive: true,
            maintainAspectRatio: false,
            hover: {mode: null},
            tooltips: {enabled: false}
        }
    });
}