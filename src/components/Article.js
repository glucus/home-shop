import React from 'react';
import CommentsList from './CommentsList';

const Article = (props) => {

  const sampleComments = [
    {
      author: 'AV',
      date: '01.04.18',
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
      date: '01.04.18',
      text: 'AAAAAA!!!!',
      likes: 0,
      responses: [],
      id: 1,
      commentId: null
    }
  ];

  return (
    <div className="row">
      <div className="col-12">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <CommentsList sampleComments={sampleComments}
                      articleId={props.articleId}/>
      </div>
    </div>
  );
}

export default Article;
