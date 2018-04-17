import React, { Component } from 'react';
import './App.css';
import Header from './components/ecommerce/common/Header';
import HomePage from './components/ecommerce/HomePage';
import Footer from './components/ecommerce/common/Footer';

class App extends Component {

  render() {
    const discountPrice = 150;
    const paymentMethods = [
      {
        id: 0, 
        name: 'Visa',
        logo: 'visa.png'
      },
      {
        id: 1, 
        name: 'Yandex Money',
        logo: 'yandexMoney.png'
      },
      {
        id: 2,
        name: 'PayPal',
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
      },
      {
        id: 5,
        name: 'Подарочный код',
        logo: ''
      }
    ];

    const subscriptions = [
      {
        id: 2,
        name: '2 года',
        months: 24,
        monthlyPrice: 120
      },
      {
        id: 1,
        name: '1 год',
        months: 12,
        monthlyPrice: 125
      },
      {
        id: 0,
        name: '6 месяцев',
        months: 6,
        monthlyPrice: 130
      }
    ];

    return (
      <div>
        <Header />
        <HomePage paymentMethods={paymentMethods}
                  subscriptions={subscriptions}
                  discountPrice={discountPrice}
                  />
        <Footer />
      </div>
    );
  }
}

export default App;
