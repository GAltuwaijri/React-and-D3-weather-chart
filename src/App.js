import React, { Component } from 'react';
import './App.css';
import LineChart from './visualizations/LineChart';

class App extends Component {
  state = {
    temps: {},
    city: 'sa', // city whose temperatures to show
  };

  componentDidMount() {
    Promise.all([
      fetch(`${process.env.PUBLIC_URL}/sa.json`),
    ]).then(responses => Promise.all(responses.map(resp => resp.json())))
    .then(([sa]) => {
      sa.forEach(day => day.date = new Date(day.date));
      this.setState({temps: {sa}});
    });
  }

  updateCity = (e) => {
    this.setState({city: e.target.value});
  }

  render() {
    const data = this.state.temps[this.state.city];

    return (
      <div className="App">
        <h1>
        Riyadh, Saudi Arabia Weather History
        </h1>
        <p>
        This is a very simple example for a <em>D3 Average Weather Chart</em> Component that included in <em>React</em> Application<br />
        </p>
        <LineChart data={data} />
        <p>
          Weather data from <a href='https://www.wunderground.com/history/daily/OERK/date/2020-10-11' target='_new'>wunderground.com</a>
          <br></br>         
          <br></br>

          Done By Ghaida Altuwaijri 
        </p>
      </div>
    );
  }
}

export default App;
