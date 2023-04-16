import React from 'react'
import { comment } from "./CommentData"

function Comment({ author, text }) {
  return (
    <div className = "Comment_box">
      <h3>{comment.author}</h3>
      <h3>{comment.text}</h3>
    </div>
  );
}

export default Comment;
