const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'number of messages between you and your partner in crime over time',
            data: messagingData.x,
            fill: false,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                }
            }]
        }

    }
});