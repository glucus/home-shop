import React from 'react';

import PaymentMethods from './PaymentMethods';
import BuyAsGiftCheckbox from './BuyAsGiftCheckBox';
import Subscriptions from './Subscriptions';

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

      // any other conditionals (discounts etc)
      // ... here

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
        <BuyAsGiftCheckbox 
                        buyAsGift={this.state.buyAsGift}
                        usePromoCode={this.state.usePromoCode}
                        handleChange={e => this.handleChange(e)}
                        hidden={this.state.usePromoCode ? 'hidden' : ''}
                        />
        {this.state.paymentMethod && 
        <Subscriptions  subscriptions={this.props.subscriptions}
                        handleClick={e => this.handleClick(e)}
                        divId='subscription'
                        />
        }
      </div>
    );
  }
}

export default HomePage;