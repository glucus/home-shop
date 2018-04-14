import React, { Component } from 'react';
import './App.css';

import HomePage from './components/ecommerce/HomePage';

class App extends Component {

  render() {
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
      },
      {
        id: 2,
        name: 'Pay Pal',
        logo: 'payPal.png'
      },
      {
        id: 3,
        name: 'SMS',
        logo: ''
      },
      {
        id: 4,
        name: 'QIWI',
        logo: 'qiwi.png'
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
