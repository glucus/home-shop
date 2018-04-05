import React from 'react';
import Response from './Response';

const Comment = (props) => {
    return (
      <div>
        <p>
          {props.author} - {props.date} &nbsp;|&nbsp;
          {props.text} &nbsp;|&nbsp;
          {props.likes} likes &nbsp;

          <button id={props.id}
                  onClick={props.onClick}>
            respond
          </button>
        </p>
  
        {props.responses.length > 0 && <ul>
          {props.responses.map (
            response => <Response key={response.id}
                          id={response.id}
                          author={response.author}
                          date={response.date}
                          text={response.text}
                          likes={response.likes}
                          onClick={props.onClick}/>
          )}</ul>}
      </div>
    );
};

export default Comment;