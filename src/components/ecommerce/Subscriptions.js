import React from 'react';

const Subscriptions = (props) => {
  
  const handleClick = e => {
    props.handleClick (e);
  };
  
  // type='subscription'
  return (
    <div>
      <h4>Выберите срок подписки</h4>
      <div id={props.divId}>
        {props.subscriptions.map (
          subscription => (
          <button key={subscription.id}
                  id={subscription.id}
                  onClick={e => handleClick(e)}
                  name={subscription.months}>
            {subscription.name}
          </button>)
        )}
      </div>
  </div>
  );
};

export default Subscriptions;