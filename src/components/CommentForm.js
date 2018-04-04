import React from 'react';

const CommentForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text"
             placeholder="New comment"
             value={props.value}
             onChange={props.onChange}></input>
      <input type="submit"></input>
    </form>
  );
}

export default CommentForm;