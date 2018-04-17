import React from 'react';
import CheckBox from './common/CheckBox';

const Subscriptions = (props) => {
  
  const handleClick = e => props.handleClick (e);
  const handleChange = e => props.handleChange (e);

  const totalPrice = (price, months) => {
    return Number.parseInt (price, 10) * Number.parseInt (months, 10);
  };

  return (
    <div className='border-top'>
      <h4>На какой срок</h4>
      <div id={props.divId}
           className='clearfix'>
        {props.subscriptions.map (
          subscription => (
          <button key={subscription.id}
                  id={subscription.id}
                  onClick={e => handleClick(e)}
                  name={subscription.months}
                  className='listButton'>
              <p className='textLeft'>{subscription.name}</p>
              <p className='brownText textLeft'>
                {totalPrice (subscription.monthlyPrice, subscription.months)} руб
              </p>
              <p className='biggerText textLeft'>
                {subscription.monthlyPrice} руб / мес
              </p>
          </button>
          )
        )}
      </div>
      {(!props.buyAsGift && props.renewalSupported) && 
        <CheckBox 
              label='Продлевать подписку автоматически'
              name='autoRenewal'
              value={ (!props.buyAsGift && props.renewalSupported ) ? 
                props.autoRenewal : false }
              disabled={props.buyAsGift || !props.renewalSupported}
              className=''
              handleChange={e => handleChange(e)}
        />}          
  </div>
  );
};

export default Subscriptions;