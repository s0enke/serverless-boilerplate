import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_ENDPOINT + '/hello').then(function(response) {
      return response.json();
    }).then(function(json) {
      this.setState({data: json});
    }.bind(this));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the serverless-boilerplate based on create-react-app</h2>
        </div>
        <pre className="App-intro">{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
