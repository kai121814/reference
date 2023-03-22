const ctx2 = document.getElementById('chart2');
const config = {
  type: 'bar',
  data: {
    labels: [
      ['LUNES', '25/10'], 
      ['MARTES', '25/10'], 
      ['MIÉRCOLES', '25/10'], 
      ['JUEVES', '25/10'], 
      ['VIERNES', '25/10'], 
      ['SÁBADO', '25/10'], 
      ['DOMINGO', '25/10']
    ],
    datasets: [{
      data: ['0.21', '0.41', '0.61', '0.87', '0.61', '0.41', '0.21'],
      backgroundColor: [
        '#1c496b99',
        '#1C496B',
        '#3C3C3B',
        '#FFA800',
        '#3C3C3B',
        '#1C496B',
        '#7792A6'
      ],
      barPercentage: 1.0,
      categoryPercentage: 1.0
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
        },
      },
    },
  }
}
const chart2 = new Chart(ctx2, config);