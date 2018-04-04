import React from 'react';

const Comment = (props) => {
    return (
      <div>
        <p>
        {props.author} - {props.date} | {props.text} | {props.likes} likes &nbsp;
        <button onClick={props.onClick} id={props.id}>respond</button>
        </p>
        

        {props.responses.length > 0 && <ul>
          {props.responses.map (
            response => <p key={response.id}>
              {response.author} - {response.date} | {response.text} | {props.likes} +
            </p>
            
          )}
        </ul>}
      </div>
    );
};

export default Comment;