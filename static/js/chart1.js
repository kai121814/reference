var ctx = document.getElementById('chart1');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      '09:00',
      '12:00', 
      '15:00',
      '18:00',
      '21:00',
      '06:00'
    ],
    datasets: [{
      data: [
        '1.0',
        '1.5',
        '1.0',
        '1.8',
        '0.8',
        '0.8'
      ],
      backgroundColor: [
        '#1C496B',
        '#1C496B',
        '#1C496B',
        '#FFA800',
        '#1C496B',
        '#1C496B'
      ]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false
        }
      },
      y: {
        title: {
          display: true,
          text: 'MTS'
        },
        grid: {
          drawBorder: false,
          display: false,
        }
      }
    }
  }
});