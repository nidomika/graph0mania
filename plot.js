const ctx = document.getElementById('myChart').getContext('2d');
const xlabels = [];

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabels, //tu bym chciala daty
        datasets: [{
            label: 'number of messages between you and your partner in crime over time',
            data: [12, 19, 3, 5, 2, 3], //no a tu bedzie liczba wiadomosci ???
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});