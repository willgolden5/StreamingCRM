import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart1 extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ['Boston', 'New York', 'Bikini Bottom', 'Testy McTestFace', 'Muerto Culo'],
        datasets: [
          {
            label: 'Population',
            data: [12345, 356356, 34521, 344666777, 344544],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart1">
        <Line
          data={this.state.chartData}
          width={100}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default Chart1;
