import React, { Component } from 'react';
import './App.css';

import HomePage from './components/ecommerce/HomePage';

class App extends Component {

  render() {
    //const name = "Sasha";
    //const unread = ['Spam', 'Hi!'];
    //const numbers = [1, 2, 3, 4, 5];

    const paymentMethods = [
      {
        id: 0, 
        name: 'Visa Something',
        logo: 'visa.png'
      },
      {
        id: 1, 
        name: 'Yandex Money',
        logo: 'yandexMoney.png'
      }
    ];

    return (
      <div>
        <HomePage paymentMethods={paymentMethods}/>
      </div>
    );
  }
}

export default App;
