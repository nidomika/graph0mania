const ctx = document.querySelector('#myChart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#cdcadf';

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: []
  },
  options: {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            day: 'DD MMM YYYY'
          }
        },
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        // stacked: true
      }]
    },

    animation: {
      duration: 0
    },

    hover: {
      animationDuration: 0
    },

    // elements: {
    //   line: {
    //     tension: 0
    //   }
    // }
  }
});