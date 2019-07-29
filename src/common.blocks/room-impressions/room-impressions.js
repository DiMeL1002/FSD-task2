export function roomImpressions() {
    var ctx = document.querySelector('.room-impressions__doughnut');
    var myChart = new Chart(ctx, {
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