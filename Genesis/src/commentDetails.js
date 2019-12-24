import React from "react";

const CommentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="data">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
