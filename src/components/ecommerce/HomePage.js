import React from 'react';

import PaymentMethods from './PaymentMethods';
import BuyAsGiftCheckbox from './BuyAsGiftCheckBox';

class HomePage extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      buyAsGift: false,
      usePromoCode: false,
      selectedMethod: ''
    };
  }
  
  handleChange (e) {   
    if (e.target.type === 'checkbox') {
      const value = e.target.checked;
      this.setState ({
        buyAsGift: value
      });
    } 
  }

  handleClick (e) {

    let selectedButton = e.target;
    let buttons = e.target.parentNode.getElementsByTagName ('button');
    let buttonsArray = [...buttons]; 

    let filtered = buttonsArray.filter (
      button => button.id !== selectedButton.id
    );

    // if another method is selected, select new method & append classes
    if (this.state.selectedMethod !== e.target.name) {

      // add classes first
      selectedButton.className = 'highlighted';
      filtered.forEach (element => element.className='muted')

      if (e.target.name === 'Подарочный код') {  // promo code
        
        this.setState ({
          selectedMethod: e.target.name,
          usePromoCode: true,
          buyAsGift: false
        }); 

      } else {  // any other payment method
        this.setState ({
          selectedMethod: e.target.name,
          usePromoCode: false
        });
      }
        
    } else {
      // if method already selected, reset state to initial, remove classes
      selectedButton.className = '';
      filtered.forEach (element => element.className='')

      this.setState ({
        selectedMethod: '',
        usePromoCode: false
      });
    }
  }


  render () {
    
    return (
      <div>
        <h1>Оформление подписки</h1>
        <p>Спасибо, что решили стать участниками клуба</p>
        <p>{this.state.selectedMethod} selected</p>
        <PaymentMethods paymentMethods={this.props.paymentMethods} 
                        buyAsGift={this.state.buyAsGift}
                        usePromoCode={this.state.usePromoCode}
                        handleClick={e => this.handleClick(e)} 
                        />

        <BuyAsGiftCheckbox buyAsGift={this.state.buyAsGift}
                           usePromoCode={this.state.usePromoCode}
                           handleChange={e => this.handleChange(e)}
                           hidden={this.state.usePromoCode ? 'hidden' : ''}
                           />

        <p>buy As gift {+this.state.buyAsGift}</p>
        <p>use Promo Code {+this.state.usePromoCode}</p>
      </div>
    );
  }
}

//PropTypes check

export default HomePage;