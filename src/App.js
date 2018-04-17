import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';

import visaImg from './images/sprite.payment-cards.png';
import yandexMoneyImg from './images/sprite.payment-yandexmoney.png';
import payPalImg from './images/sprite.payment-paypal.png';
import qiwiImg from './images/sprite.payment-qiwi.png';

class App extends Component {

  render() {
    const discountPrice = 150;
    const paymentMethods = [
      {
        id: 0, 
        name: 'Visa',
        logo: visaImg
      },
      {
        id: 1, 
        name: 'Yandex Money',
        logo: yandexMoneyImg
      },
      {
        id: 2,
        name: 'PayPal',
        logo: payPalImg
      },
      {
        id: 3,
        name: 'SMS',
        logo: ''
      },
      {
        id: 4,
        name: 'QIWI',
        logo: qiwiImg
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
        <HomePage paymentMethods={paymentMethods}
                  subscriptions={subscriptions}
                  discountPrice={discountPrice}
                  />
      </div>
    );
  }
}

export default App;
