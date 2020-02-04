const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'number of messages over time',
      // data: [{
      //   x: 1527754018632,
      //   y: 0
      // }, {
      //   x: 1527753837285,
      //   y: 1
      // }, {
      //   x: 1527753499064,
      //   y: 2
      // }, {
      //   x: 1527753163022,
      //   y: 3
      // }, {
      //   x: 1527753122813,
      //   y: 4
      // }, {
      //   x: 1527751784835,
      //   y: 5
      // }],
      data: updatedMessagingData,
      fill: false,
      borderColor: 'rgb(205, 202, 223)'
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: 'time',
        // time: {
        //   displayFormats: {
        //     year: 'YYYY'
        //   }
        // },
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
myChart.update()

// [{
//   x: 1527754018632,
//   y: 0
// }, {
//   x: 1527753837285,
//   y: 1
// }, {
//   x: 1527753499064,
//   y: 2
// }, {
//   x: 1527753163022,
//   y: 3
// }, {
//   x: 1527753122813,
//   y: 4
// }, {
//   x: 1527751784835,
//   y: 5
// }]