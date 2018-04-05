import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import CommentCounter from './CommentCounter';

class CommentsList extends React.Component {

  constructor (props) {
    
    super (props);

    this.state = {
      comments: props.sampleComments,
      newComment: {author: '', date: '', text: '', likes: 0, responses: [],
                   id: 0, commentId: null},
      respondToComment: null,
      commentsCount: parseInt (props.sampleCommentsCount, 10)
    }

    this.submitComment = this.submitComment.bind (this);
    this.handleChange = this.handleChange.bind (this);
    this.respondToComment = this.respondToComment.bind (this);
  }

/*
  countResponses = () => {
    let responseNumber = [];
    this.state.comments.map (
      comment => responseNumber.push (comment.responses.length));
    return responseNumber;
  };
*/

  handleChange (event) {
    let newComment = {};
    newComment.text = event.target.value;
    this.setState ({newComment: newComment});
  }


  respondToComment (event) {
    let respondToComment = event.target.id;
    this.setState ({respondToComment: respondToComment});
  }


  submitComment (event) {

      event.preventDefault();
      let date = new Date();
      let commentId = this.state.respondToComment;

      let newComment = Object.assign ({}, this.state.newComment,
        {
          author: 'guest',
          id: Date.now(),
          date: date.toLocaleString(),
          responses: [],
          commentId: commentId === null ? null : parseInt (commentId, 10)
        }
      );

      let comments = Object.assign ([], this.state.comments);

      if (newComment.commentId === null) {
        comments.push(newComment);
      } else {

        let targetCommentsArr = comments.filter(comment => comment.id === newComment.commentId);
        let targetComment = targetCommentsArr[0];
        let targetIndex = comments.indexOf (targetComment);

        targetComment.responses.push(newComment);
        comments.splice (targetIndex, 1, targetComment);
      }

      this.setState (prevState => ({
        comments: comments,
        commentsCount: prevState.commentsCount + 1,
        respondToComment: null,
        newComment: {author: '', date: '', text: '', likes: 0, responses: [],
        id: 0, commentId: null}
      })
    );
  }
  

  render () {
    return (
      <div>
        <CommentCounter commentsCount={this.state.commentsCount}/>
        {this.state.comments.map (comment => <Comment
                        key={comment.id}
                        id={comment.id}
                        author={comment.author}
                        date={comment.date}
                        text={comment.text}
                        likes={comment.likes}
                        responses={comment.responses}
                        onClick = {this.respondToComment}
                      />
        )}
        < CommentForm value={this.state.newComment.text}
                      onChange={this.handleChange}
                      onSubmit={this.submitComment}
        />
      </div>
    );
  }

}
export default CommentsList;