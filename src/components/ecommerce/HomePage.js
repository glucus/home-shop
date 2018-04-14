import React from 'react';

class HomePage extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      buyAsGift: false,
      selectedMethod: ''
    };
  }
  
  handleCheck (e) {
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
        <div>
          <h4>Выберите способ оплаты</h4>
            {this.props.paymentMethods.map (
              method => <button key={method.id}>{method.name}</button>
            )}
            {this.state.buyAsGift ? (
              <button disabled>Подарочный сертификат</button>) : (
              <button>Подарочный сертификат</button>
            )}
          <div>
            <label>Покупаю подписку в подарок</label>
            <input type="checkbox"
                   name="buyAsGift"
                   checked={this.state.buyAsGift}
                   onChange={(e) => this.handleCheck(e)}>
            </input>
          </div>
        </div>
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