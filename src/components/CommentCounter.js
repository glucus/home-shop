import React from 'react';

const CommentCounter = (props) => {
  return (
    <div>
      <h2>{props.comments.length} comments</h2>
    </div>
  );
};

export default CommentCounter;
