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
      autoRenewal: false,
      addDiscount: false,
      paymentMethod: {name: ''},
      subscription: {name: ''}
    };
  }
  
  handleChange (e) {
    const field = e.target.name;
    const value = e.target.checked;
    this.setState ({
      [field]: value
    });
  }

  handleClick (e) {
    let selectedButton = e.target;
    let field = selectedButton.parentNode.id;  // used for setting state

    let propsName = '';
    if (field === 'paymentMethod') {
      propsName = 'paymentMethods';
    } else if (field === 'subscription') {
      propsName = 'subscriptions';
    } 

    // for state 
    let idNum = Number.parseInt (e.target.id, 10);
    let selectedObjectArr = this.props[propsName].filter (
      object => object.id === idNum
    );
    let selectedObject = selectedObjectArr[0];

    // for styling classes
    let buttons = e.target.parentNode.getElementsByTagName ('button');
    let buttonsArray = [...buttons]; // html collection to array
    let filtered = buttonsArray.filter (
      button => button.id !== selectedButton.id
    );
    

    // if another option is selected, select new option & append classes
    if (this.state[field] !== selectedObject) {

      selectedButton.className = 'highlighted';
      filtered.forEach (element => element.className='muted')
      
      //set state to selected payment method or subscription
      this.setState ({
        [field]: selectedObject
      });
        
    } else {
      // if method already selected, reset state to initial, remove classes
      selectedButton.className = '';
      filtered.forEach (element => element.className='');

      this.setState ({
        [field]: {name: ''}
      });
    }
  }

  render () {

    return (
      <div>
        <h1>Оформление подписки</h1>
        <p>Спасибо, что решили стать участниками клуба</p>
        <p>
          {this.state.paymentMethod.name === '' ? this.state.paymentMethod.name : ''} 
          {this.state.subscription.name === '' ? this.state.subscription.name : ''} 
        </p>
        <PaymentMethods paymentMethods={this.props.paymentMethods} 
                        buyAsGift={this.state.buyAsGift}
                        handleClick={e => this.handleClick(e)}
                        divId='paymentMethod'
                        />
        <CheckBox label='Покупаю подписку в подарок'
                  name='buyAsGift'
                  value={this.state.buyAsGift}
                  disabled={this.state.paymentMethod.name === 'Подарочный код'}
                  className={this.state.usePromoCode ? 'hidden' : ''}
                  handleChange={e => this.handleChange(e)}
                  />
        {this.state.paymentMethod.name !== '' && 
          <Subscriptions 
                  subscriptions={this.props.subscriptions}
                  handleClick={e => this.handleClick(e)}
                  divId='subscription'
                  />}
        <CheckBox label='Продлевать подписку автоматически'
                  name='autoRenewal'
                  value={this.state.autoRenewal}
                  disabled=''
                  className=''
                  handleChange={e => this.handleChange(e)}
                  />
        {this.state.subscription.name !== '' && 
          <FinalPayment 
                  subscription = {this.state.subscription}
                  addDiscount = {this.state.addDiscount}
                  discountValue = {this.props.discountValue}
                  />}
        <CheckBox label='Добавить подписку на скидку 5%'
                  name='addDiscount'
                  value={this.state.addDiscount}
                  disabled='' 
                  className=''
                  handleChange={e => this.handleChange(e)}/>
        </div>
    );
  }
}

export default HomePage;