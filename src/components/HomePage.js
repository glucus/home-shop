import React from 'react';

import Header from './common/Header';
import Footer from './common/Footer';

import PaymentMethods from './PaymentMethods';
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
    
    e.preventDefault();
    let selectedButton = (e.target.type !== 'submit') ? e.target.parentNode : e.target;
    let field = selectedButton.parentNode.id;  // used for setting state
    let propsName = '';
    if (field === 'paymentMethod') {
      propsName = 'paymentMethods';
    } else if (field === 'subscription') {
      propsName = 'subscriptions';
    } 

    // for state 
    let idNum = Number.parseInt (selectedButton.id, 10);
    let selectedObjectArr = this.props[propsName].filter (
      object => object.id === idNum
    );
    let selectedObject = selectedObjectArr[0];

    // for styling classes
    let buttons = selectedButton.parentNode.getElementsByTagName ('button');
    let buttonsArray = [...buttons]; // html collection to array
    let filtered = buttonsArray.filter (
      button => button.id !== selectedButton.id
    );
    

    // if another option is selected, select new option & append classes
    if (this.state[field] !== selectedObject) {

      selectedButton.className = 'listButton highlighted';
      filtered.forEach (element => element.className='listButton muted')
      
      //set state to selected payment method or subscription
      this.setState ({
        [field]: selectedObject
      });
        
    } else {
      // if method already selected, reset state to initial, remove classes
      selectedButton.className = 'listButton';
      filtered.forEach (element => element.className='listButton');

      this.setState ({
        [field]: {name: ''}
      });
    }
  }

  
  render () {
    const renewal = ['Visa', 'Yandex Money', 'PayPal', 'SMS'];
    const renewalSupported = renewal.filter (
      method => method === this.state.paymentMethod.name
    );

    return (
      <div className='container'>
        <Header />
        <PaymentMethods 
                  paymentMethods = {this.props.paymentMethods}
                  divId = 'paymentMethod'
                  paymentMethod = {this.state.paymentMethod}
                  buyAsGift = {this.state.buyAsGift}
                  handleClick = {e => this.handleClick(e)}
                  handleChange = {e => this.handleChange(e)}
        />
        {this.state.paymentMethod.name !== '' && 
        <Subscriptions 
                  subscriptions = {this.props.subscriptions}
                  divId = 'subscription'
                  autoRenewal = {this.state.autoRenewal}
                  renewalSupported = { renewalSupported.length > 0 ? true : false}
                  paymentMethod = {this.state.paymentMethod}
                  buyAsGift = {this.state.buyAsGift}
                  handleClick = {e => this.handleClick(e)}
                  handleChange={e => this.handleChange(e)}
        />}
        {this.state.subscription.name !== '' && 
        <FinalPayment
              subscription = {this.state.subscription}
              autoRenewal = {this.state.autoRenewal}
              renewalSupported = { renewalSupported.length > 0 ? true : false}
              addDiscount = {this.state.addDiscount}
              discountPrice = {this.props.discountPrice}
              handleChange = {e => this.handleChange(e)}
              buyAsGift = {this.state.buyAsGift}
        />}
        <Footer disabled={this.state.subscription.name === ''}
                className={this.state.subscription.name === '' ? 
                'hidden' : 'button-round-yellow'}
                />
        </div>
    );
  }
}

export default HomePage;