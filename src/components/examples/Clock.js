
import React from 'react';

class Clock extends React.Component {

  // called first
  constructor (props) {
    super (props);
    this.state = {
      date: new Date()
    };
  }
  
  // called every second by timer created by componentDidMount()
  updateTime () {
    this.setState ({ date: new Date()});
    // as state has changed, React will call render() again
  }


  // called after component is rendered for the first time
  // when <Clock /> is inserted in the DOM

  componentDidMount () {
    // in call we can set properties directly on 'this'
    this.timerID = setInterval (() => this.updateTime(), 1000);
  }
  
  // will be called if component will be removed from DOM (before it happens)
  componentWillUnmount () {
    clearInterval (this.timerID);
  }
  
  // called second
  render () {
    return (
      <h4>
        It is {this.state.date.toLocaleTimeString()}
      </h4>
    );  
  }

}

export default Clock;

