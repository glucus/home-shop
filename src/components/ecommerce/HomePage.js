import React from 'react';

import PaymentMethods from './PaymentMethods';
import BuyAsGiftCheckbox from './BuyAsGiftCheckBox';

class HomePage extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      buyAsGift: false,
      usePromoCode: false,
      selectedMethod: '',
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

    // transforming html collection into array
    let buttonsArray = [...buttons]; 
    
    let filtered = buttonsArray.filter (
      button => button.id !== selectedButton.id
    );
    
    // append classes to selected and not selected buttons
    if (selectedButton.className === 'highlighted') {
      selectedButton.className = '';
      filtered.forEach (element => element.className='')
    } else {
      selectedButton.className = 'highlighted';
      filtered.forEach (element => element.className='muted')  
    }

    // checks whether promo code has been chosen 
    if (e.target.name === 'Подарочный код') {

      let checkbox = document.querySelector ("input[name='buyAsGift']");
      //let checkboxLabel = document.querySelector ('buyAsGiftLabel');

      if (!checkbox.disabled) {
        checkbox.setAttribute ('disabled', 'disabled');
        checkbox.classList.add ('hidden');
        //checkboxLabel.classList.add ('hidden');

      } else {
        checkbox.removeAttribute ('disabled');
        checkbox.classList.remove ('hidden');
        //checkboxLabel.classList.remove ('hidden');
      }

      this.setState ({
          selectedMethod: e.target.name,
          usePromoCode: true,
          buyAsGift: false
      }); 

    } else {
      this.setState ({
        selectedMethod: e.target.name,
        usePromoCode: false
      });
    }
  }

  render () {
    
    //const hidden = this.state.usePromoCode ? 'hidden' : '';
    
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
                           handleChange={e => this.handleChange(e)}
                           />

        <p>buy As gift {+this.state.buyAsGift}</p>
        <p>use Promo Code {+this.state.usePromoCode}</p>
      </div>
    );
  }
}

//PropTypes check

export default HomePage;