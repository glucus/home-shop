import React from 'react';

const Welcome = (props) => {
  return (
    <div>
      <h4>Welcome, {props.name}</h4>
      {props.unread.length > 0 && 
          <p>You have {props.unread.length} new messages</p>
      }
    </div>
  );
};

export default Welcome;