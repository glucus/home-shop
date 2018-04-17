import React from 'react';
import CheckBox from './common/CheckBox';

const FinalPayment = (props) => {

const handleChange = e => props.handleChange (e);

const totalPrice = (monthlyPrice, monthsNum, addDiscount, discountPrice = 0) => {

  const price = Number.parseInt (monthlyPrice, 10);
  const months = Number.parseInt (monthsNum, 10);
  const discountPr = Number.parseInt (discountPrice, 10);

  if (props.addDiscount) {
    return price * months + discountPr;
  }
  return price * months;
}
  
  return (
    <div className='border-top'>
      <h4>Итого к оплате</h4>
      
      <p className='bigText'>
        {props.addDiscount && 
        <b className='mutedText'>
          {totalPrice (
          props.subscription.monthlyPrice,
          props.subscription.months)
          }
          &nbsp;+&nbsp;
          {Number.parseInt (props.discountPrice, 10)}
          &nbsp;=&nbsp;
        </b>}
        
        <b>{totalPrice (
          props.subscription.monthlyPrice,
          props.subscription.months,
          props.addDiscount,
          props.discountPrice
        )} руб</b>
      </p>
      {props.autoRenewal && (!props.buyAsGift) && props.renewalSupported &&
        <p>Далее 120 руб. в месяц</p>
      }
      <CheckBox
          label='Добавить подписку на скидку 5% (150 руб)'
          name='addDiscount'
          value={props.addDiscount}
          disabled='' 
          className=''
          handleChange={e => handleChange(e)}
      />
    </div>
  );
};

export default FinalPayment;

