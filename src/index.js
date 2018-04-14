import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



/*
const tick = () => {

  const testElement = 
    <div>
      <h1>Hello World!</h1>
      <h4>It is {new Date().toLocaleTimeString()}</h4>
    </div>;
  ReactDOM.render (testElement, document.getElementById('root'));
}

setInterval (tick, 1000);
*/


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
