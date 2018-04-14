import React from 'react';

class ToggleButton extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      toggled: true
    };
    this.handleClick = this.handleClick.bind (this);
  }

  handleClick () {
    this.setState (prevState => ({ toggled: !prevState.toggled }) );
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggled ? 'On' : 'Off'}
      </button>
    );
  }
}

export default ToggleButton;