import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentsList from './components/CommentsList';

class App extends Component {

  sampleComments = [
    {
      author: 'AV',
      date: '31.03.18',
      text: 'Hello world!',
      likes: 1,
      responses: [{
          author: 'Alien mind',
          date: '01.04.18',
          text: 'Hello earthman!',
          likes: 1,
          id: 3,
          commentId: 0
        }],
      id: 0,
      commentId: null
    }, 
    { 
      author: 'Lemongrasp',
      date: '31.03.18',
      text: 'AAAAAA!!!!',
      likes: 0,
      responses: [
        {author: 'Banshee',
          date: '31.03.18',
          text: 'OMG!!!!',
          likes: 1,
          id: 4,
          commentId: 1
        }
      ],
      id: 1,
      commentId: null
    }
  ]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CommentsList sampleComments={this.sampleComments}
                      sampleCommentsCount="4"/>
      </div>
    );
  }
}

export default App;
