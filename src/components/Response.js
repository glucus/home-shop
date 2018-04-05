import React from 'react';

const Response = (props) => {
  return (
    <div><p>
      {props.author} - {props.date} | {props.text} | {props.likes} +
    </p></div>
  );
};

export default Response;