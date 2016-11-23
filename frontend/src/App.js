import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  componentDidMount() {
    console.log(process.env);
    fetch(process.env.REACT_APP_API_ENDPOINT + '/hello').then(
      function(data) {
        this.setState({data: data});
      }.bind(this)
    );
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
