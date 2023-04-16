import React from "react";
import BlogPost from "../BlogPost";
import { blogPost } from "../BlogPost/BlogData.js";

function App() {
  return (
    <div className="App">
      <BlogPost blogPost= { blogPost } />
    </div>
    );
  }

export default App;
