import React from 'react';

const CommentCounter = (props) => { 
  
  return (
      <div className="col-12 text-left comment-counter">
      <h4>{props.commentsCount} comments &nbsp;</h4>
      </div>
  );
};

export default CommentCounter;
