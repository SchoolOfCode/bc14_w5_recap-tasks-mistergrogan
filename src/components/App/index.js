import { comment } from "../Comment/CommentData";
import Comment from "../Comment";
import React from "react";
import BlogPost from "../BlogPost";
import { blogPost } from "../BlogPost/BlogData.js";

function App() {
  return (
    <div className="App">
      <BlogPost blogPost= { blogPost } />
      <Comment comment= { comment } />
    </div>

    );
  }

export default App;
