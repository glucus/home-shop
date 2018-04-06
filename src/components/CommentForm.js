import React from 'react';

const CommentForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="form-inline">
      <textarea placeholder="New comment"
             rows="3"
             value={props.value}
             onChange={props.onChange}
             className="form-control col-sm-12 col-md-12">
      </textarea>
      <input type="submit" className="btn btn-basic col-sm-12 col-md-2"></input>
    </form>
  );
}

export default CommentForm;