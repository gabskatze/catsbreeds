import React, { Component } from 'react';
import './App.css';
import List from './List';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <Navbar />
        <List />
      </React.Fragment>
    );
  }
}

export default App;
