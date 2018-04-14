import React from 'react';

import Header from './common/Header';
import PaymentMethods from './PaymentMethods';
import BuyAsGiftCheckbox from './BuyAsGiftCheckBox';
import Footer from './common/Footer';

class HomePage extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      buyAsGift: false,
      selectedMethod: ''
    };
  }
  
  handleChange (e) {
    const value = e.target.checked;
    this.setState({
      buyAsGift: value
    });
  }

  handleClick (e) {
    console.log (e.target.name);
    this.setState (
      prevState => ({
        buyAsGift: !prevState.buyAsGift
      })
    );
  }

  render () {

    return (
      <div>
        <Header />
        <PaymentMethods paymentMethods={this.props.paymentMethods} 
                        buyAsGift={this.state.buyAsGift}
                        handleClick={e => this.handleClick(e)} />
        <p>{this.state.selectedMethod} selected</p>
         <BuyAsGiftCheckbox buyAsGift={this.state.buyAsGift}
                           handleChange={e => this.handleChange(e)} />
        <Footer />
      </div>
    );

  }
}

//PropTypes check

export default HomePage;