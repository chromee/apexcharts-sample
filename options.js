var options = {
  chart: {
    height: '95%',
    type: 'heatmap',
  },
  series: series,
  plotOptions: {
    heatmap: {
      colorScale: {
        ranges: [{
          from: -100,
          to: 1,
          color: '#aaa',
          name: 'null',
        },
        {
          from: 1,
          to: 45,
          color: '#FFB200',
          name: 'low (0~45 fps)',
        },
        {
          from: 45,
          to: 60,
          color: '#128FD9',
          name: 'medium (46~60 fps)',
        },
        {
          from: 60,
          to: 80,
          color: '#00A100',
          name: 'high (61~80 fps)',
        }
        ]
      },
    }
  },
  title: {
    text: 'frame rate each model count adn render viewport scale',
    align: 'center',
    style: {
      fontSize: '26px'
    }
  },
  grid: {
    padding: {
      right: 20
    }
  }
};