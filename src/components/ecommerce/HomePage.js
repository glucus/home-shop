import React from 'react';
import PaymentMethods from './PaymentMethods';
import BuyAsGiftCheckbox from './BuyAsGiftCheckBox';

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

  render () {
    // move this to common header and footer later
    return (
      <div>
        <div>
          <h4>Домашний магазин</h4>
          <h1>Оформление подписки</h1>
          <p>Спасибо, что решили стать участниками клуба</p>
        </div>
        <PaymentMethods paymentMethods={this.props.paymentMethods} 
                        buyAsGift={this.state.buyAsGift} />
        <BuyAsGiftCheckbox buyAsGift={this.state.buyAsGift}
                           handleChange={e => this.handleChange(e)} />
        <div>
          <p>Защищено, без комиссий</p>
        </div>
        <div>
          <p>Футер</p>
        </div>
      </div>
    );

  }
}

//PropTypes check

export default HomePage;