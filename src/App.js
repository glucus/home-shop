import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/Article';


class App extends Component {

  articles = [
  {
    id: 0,
    heading: 'New Times',
    content: 'Lopem ipsum...'
  }, 
  { 
    id: 1,
    heading: 'New Times2',
    content: 'Lopem ipsum2...'
  }
]

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div className="container">
          {this.articles.map (article => <Article key={article.id}
                                                  heading={article.heading}
                                                  content={article.content}
                                                  articleId={article.id}
                                         />)}
        </div>
        </div>
    );
  }
}

export default App;
