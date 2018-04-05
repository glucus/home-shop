import React from 'react';

const CommentForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="form-inline">
      <input type="text"
             placeholder="New comment"
             value={props.value}
             onChange={props.onChange}
             className="form-control col-10">
             </input>
      <input type="submit" className="btn btn-basic col-2"></input>
    </form>
  );
}

export default CommentForm;