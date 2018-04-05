import React from 'react';

const CommentCounter = (props) => { 
  
  return (
    <div>
      <h2>{props.commentsCount} comments &nbsp;</h2>
    </div>
  );
};

export default CommentCounter;
