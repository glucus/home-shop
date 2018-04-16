import React from 'react';

const PaymentMethods = (props) => {

  const handleClick = e => props.handleClick(e);

  return (
    <div>
      <h4>Выберите способ оплаты</h4>
      <div id={props.divId}>
        {props.paymentMethods.map (
          method => (
          <button key={method.id}
                  id={method.id}
                  onClick={e => handleClick(e)}
                  name={method.name}>
                  {method.name}
          </button>)
        )}
        {<button disabled={props.buyAsGift}
                 onClick = {e => handleClick(e)}
                 name='Подарочный код'>
          Подарочный код
        </button>}
      </div>
  </div>
  );

};

export default PaymentMethods;

