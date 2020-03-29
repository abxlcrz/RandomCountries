import React from 'react';
import './App.css';
import AppRouter from './common/router/AppRouter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <AppRouter />
    );  
  }
}

export default App;
