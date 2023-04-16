import React from "react";

function BlogPost ({ blogPost }) 
{
    return (
        <div>
            <h1>{blogPost.title}</h1>
            <h3>{blogPost.author}</h3>
            <h5>{blogPost.datePosted}</h5>
            <figure>
                <img src={`${blogPost.image}`} alt={`${blogPost.alt}`}
                    style={{ height: 400, width: 600 }}
                />
                <figcaption>{blogPost.alt}</figcaption>
            </figure>
            <p>{blogPost.text}</p>
        </div>
    );
}


export default BlogPost;