import React from 'react';
import CheckBox from './common/CheckBox';

const PaymentMethods = (props) => {

  const handleClick = e => props.handleClick (e);
  const handleChange = e => props.handleChange (e);

  return (
    <div className='border-top'>
      <h4>Выберите способ оплаты</h4>
      <div id={props.divId}
           className='clearfix'>
        {props.paymentMethods.map (
          method => (
          <button key={method.id}
                  id={method.id}
                  onClick={e => handleClick(e)}
                  name={method.name}
                  disabled={method.name === 'Подарочный код' && props.buyAsGift}
                  className='listButton'>
            {method.logo === '' ? 
              <p className='biggerText'>{method.name}</p> : 
              <img src={method.logo} alt={method.name}/>
            }
          </button>)
        )}
      </div>
      <CheckBox label='Покупаю подписку в подарок'
                name='buyAsGift'
                value={props.buyAsGift}
                disabled={props.paymentMethod.name === 'Подарочный код'}
                className={props.paymentMethod.name === 'Подарочный код' ? 'hidden' : ''}
                handleChange={e => handleChange(e)}
      />
    </div>
  );
};

export default PaymentMethods;

