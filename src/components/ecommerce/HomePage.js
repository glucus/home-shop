import React from 'react';

import PaymentMethods from './PaymentMethods';
import CheckBox from './common/CheckBox';

import Subscriptions from './Subscriptions';
import FinalPayment from './FinalPayment';

class HomePage extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      buyAsGift: false,
      usePromoCode: false,
      paymentMethod: null,
      subscription: null
    };
  }
  
  handleChange (e) {  
    const value = e.target.checked;
    this.setState ({ buyAsGift: value });
  }

  handleClick (e) {

    let selectedButton = e.target;
    let field = selectedButton.parentNode.id;  // used for setting state

    let buttons = e.target.parentNode.getElementsByTagName ('button');
    let buttonsArray = [...buttons]; // html collection to array

    let filtered = buttonsArray.filter (
      button => button.id !== selectedButton.id
    );

    // if another option is selected, select new option & append classes
    if (this.state[field] !== e.target.name) {

      selectedButton.className = 'highlighted';
      filtered.forEach (element => element.className='muted')

      // promo code vs. any other payment method
      if (e.target.name === 'Подарочный код') {  
        this.setState ({
          usePromoCode: true,
          buyAsGift: false
        }); 
      } else {
        this.setState ({
          usePromoCode: false
        }); 
      }

      // any other conditionals (discounts, autorenewal etc) here
      // ... 

      // select payment method or subscription
      this.setState ({
        [field]: e.target.name,
      }); 
        
    } else {
      // if method already selected, reset state to initial, remove classes
      selectedButton.className = '';
      filtered.forEach (element => element.className='');

      this.setState ({
        [field]: null,
        usePromoCode: false
      });
    }
  }

  render () {
    return (
      <div>
        <h1>Оформление подписки</h1>
        <p>Спасибо, что решили стать участниками клуба</p>
        <p>
          {this.state.paymentMethod} {this.state.subscription} selected
        </p>
        <PaymentMethods paymentMethods={this.props.paymentMethods} 
                        buyAsGift={this.state.buyAsGift}
                        usePromoCode={this.state.usePromoCode}
                        handleClick={e => this.handleClick(e)}
                        divId='paymentMethod'
                        />
        <CheckBox label='Покупаю подписку в подарок'
                  name='buyAsGift'
                  value={this.state.buyAsGift}
                  disabled={this.state.usePromoCode}
                  className={this.state.usePromoCode ? 'hidden' : ''}
                  handleChange={e => this.handleChange(e)}
                  />
        {this.state.paymentMethod && 
        <Subscriptions  subscriptions={this.props.subscriptions}
                        handleClick={e => this.handleClick(e)}
                        divId='subscription'
                        />}
        {this.state.subscription && 
          <FinalPayment />
        }
      </div>
    );
  }
}

export default HomePage;