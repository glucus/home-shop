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
    }
  ];

  return (
    <div className="row">
      <div className="col-sm-12 col-md-10 offset-md-1">
        <h2>{props.heading}</h2>
        <p className="text-justify">{props.content}</p>
        <CommentsList sampleComments={sampleComments}
                      articleId={props.articleId}/>
      </div>
    </div>
  );
}

export default Article;
