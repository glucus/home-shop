import React from 'react';
import CommentsList from './CommentsList';

class Article extends React.Component {

  sampleComments = [
    {
      author: 'AV',
      date: '31.03.18',
      text: 'Hello world!',
      likes: 1,
      responses: [{
          author: 'Friendly alien',
          date: '01.04.18',
          text: 'Hello earth!',
          likes: 1,
          id: 3,
          commentId: 0
        }],
      id: 0,
      commentId: null
    }, 
    { 
      author: 'Surprised',
      date: '31.03.18',
      text: 'AAAAAA!!!!',
      likes: 0,
      responses: [],
      id: 1,
      commentId: null
    }
  ]

  sampleCommentsCount () {
    let levelOneCount = this.sampleComments.length;
    let responsesCountArr = this.sampleComments.map (
      comment => comment.responses.length
    );
    let responsesCount = responsesCountArr.reduce ((a,b) => a+b);
    let result = levelOneCount + responsesCount;
    return result; 
  }
  
  sampleCountResult = this.sampleCommentsCount();

  render () {
    return (
      <div className="row">
        <div className="col-12">
          <h1>{this.props.heading}</h1>
          <p>{this.props.content}</p>
          <CommentsList sampleComments={this.sampleComments}
                      sampleCommentsCount={this.sampleCountResult} articleId={this.props.articleId}/>
        </div>
      </div>
    );
  }
}

export default Article;
