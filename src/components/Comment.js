import React from 'react';

const Comment = (props) => {
    return (
      <div className="card">
        <p>
          {props.author} - {props.date} &nbsp;|&nbsp;
          {props.text} &nbsp;|&nbsp;
          {props.likes} likes &nbsp;

          <button id={props.id}
                  onClick={props.onClick}
                  className="btn btn-link">
            respond
          </button>
        </p>
  
        {props.responses.length > 0 && <ul>
          {props.responses.map (
            response => (
            <div key={response.id}><p>
              {response.author} - {response.date} | {response.text} | {response.likes} +
            </p></div>)
          )}</ul>}
      </div>
    );
};

export default Comment;