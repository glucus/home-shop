import React from 'react';

const Footer = (props) => {

  return (
    <div className='footer'>
      <div className='clearfix'>
      <button disabled={props.disabled}
              className = {props.className}>
        Оплатить
      </button>
        <p>Нет комиссий при оплате банковскими картами, Яндекс.Деньгами и Qiwi</p>
        <p>Все платежи надежно защищены</p>
      </div>
    </div>
  );
};

export default Footer;