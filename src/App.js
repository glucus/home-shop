import React, { Component } from 'react';
import './App.css';
import Header from './components/ecommerce/common/Header';
import HomePage from './components/ecommerce/HomePage';
import Footer from './components/ecommerce/common/Footer';

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

    const subscriptions = [
      {
        id: 2,
        name: '2 года',
        months: 24
      },
      {
        id: 1,
        name: '1 год',
        months: 12
      },
      {
        id: 0,
        name: '6 месяцев',
        months: 6
      }
    ];

    return (
      <div>
        <Header />
        <HomePage paymentMethods = {paymentMethods}
                  subscriptions = {subscriptions}
                  />
        <Footer />
      </div>
    );
  }
}

export default App;
