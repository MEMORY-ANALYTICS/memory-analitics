const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['12:05', '12:6', '12:07', '12:08', '12:09', '12:10'],
        datasets: [{
          label: 'Core 1',
          data: [12, 19, 20, 28, 39, 22],
          borderWidth: 1
        },
        { 

          label: 'Core 2',
          data: [20, 15, 32, 14, 22, 31],
          borderWidth: 1
        },
        {
          label: 'Core 3',
          data: [22, 19, 13, 35, 42, 33],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    const ctx1 = document.getElementById('chart-line');

    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['12:05', '12:6', '12:07', '12:08', '12:09', '12:10'],
        datasets: [{
          label: 'memory-analytics',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        },
        {
          label: 'OHM',
          data: [20, 30, 2, 7, 1, 4],
          borderWidth: 2
        },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctx2 = document.getElementById('chart-bars');

    new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['céu limpo', 'nublado', 'tempaste'],
        datasets: [{
          label: 'temperatura',
          data: [17, 22, 30],
          borderWidth: 1
        }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });