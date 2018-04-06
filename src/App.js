import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './components/Article';


class App extends Component {

  articles = [
  {
    id: 0,
    heading: 'Article 1',
    content: 'Aenean molestie tincidunt molestie. Pellentesque nec lacus eu mauris ultricies volutpat. Fusce rhoncus lacus in velit condimentum tincidunt. Maecenas nec massa at sem commodo varius at ac erat. Mauris quis vehicula tortor, eget laoreet enim. Sed vitae velit a magna eleifend vehicula nec in nisi. In eget pulvinar tellus. Ut tempor dictum odio'
  }, 
  { 
    id: 1,
    heading: 'Article 2',
    content: 'Quisque at finibus sapien. Aliquam rhoncus lectus iaculis mollis ullamcorper. In ultrices eros purus, sit amet mollis orci ultrices ac. Donec feugiat diam sed nisi condimentum aliquet. Nulla nulla urna, efficitur et orci nec, ultrices pretium diam. Nunc et neque eu dui auctor scelerisque quis sed augue. Fusce laoreet nisi ullamcorper maximus imperdiet. Sed eget blandit odio. Vivamus aliquam congue risus, sit amet pellentesque felis consectetur vitae. Duis finibus tortor id risus finibus, dictum imperdiet quam finibus. Nunc venenatis suscipit arcu at posuere. Suspendisse sollicitudin dignissim leo, sed rutrum nibh interdum quis.'
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
