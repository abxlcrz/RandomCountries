import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <p className="clock">{this.state.date.toLocaleTimeString()}</p>    
      </div>
    );  
  }

  componentDidMount(){
    this.timerID =  setInterval(()=>{
      this.setState({date: new Date()})
    }, 500);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
}

export default Clock;
